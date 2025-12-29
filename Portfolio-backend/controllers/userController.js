import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import asyncHandler from "../middleware/asyncHandler.js";
import createToken from '../utils/createToken.js';


//Create User
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
 if (!username || !email || !password) {
    throw new Error('Please provide all required fields');
  }
  const normalizedEmail = email.toLowerCase().trim();
  const userExists = await User.findOne({ email: normalizedEmail });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email: normalizedEmail,
      password: hashedPassword
    });

    try {
        await newUser.save();
        res.status(201).json({ 
            id: newUser._id,
             username: newUser.username,
              email: newUser.email,
              isAdmin: newUser.isAdmin,
             });


    }catch (error) {
      res.status(400)
      throw new Error('Invalid user data');
    }
  });

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error('Please provide both email and password');
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser){
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if(isPasswordValid) { 
      createToken(res, existingUser._id);

      res.status(200).json({ 
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });
        } else {
          res.status(401);
          throw new Error('Invalid email or password');
        }
    }  else{
        res.status(401);
        throw new Error('Invalid email or password');
    } 
    
});

const logCurrentUser = asyncHandler(async (req, res) =>{
  res.cookie('token','',{
    httpOnly:true,
    expires:new Date(0)
  });
  res.status(200).json({message:'Logged out successfully'})

})

const getAllUsers = asyncHandler(async (req, res) => {
  const users =await User.find({});
  res.json(users);
});

const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if(user){
    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  }else{
    res.status(401);
    throw new Error('User not found');
  }
});

const UpdateCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if(user){
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
     
    if(req.body.password){
      const salt = await bcrypt.genSalt(10);
      const hashedPassword= await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }
    const updatedUser = await user.save();
    res.json({
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      admin: updatedUser.isAdmin,
    });
  }else{
    res.status(404);
    throw new Error('User not found');
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ message: 'User deleted successfully' });
});

const updateUserProfileByAdmin = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin || user.isAdmin;

    const updatedUser = await user.save();
    res.json({
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { createUser ,loginUser ,logCurrentUser ,getAllUsers , getCurrentUserProfile , UpdateCurrentUserProfile, deleteUser ,updateUserProfileByAdmin};