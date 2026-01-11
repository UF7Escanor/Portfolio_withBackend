import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';

dotenv.config();

const list = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const users = await User.find({}).select('email username password isAdmin createdAt');
    console.log('Users in DB:');
    users.forEach(u => console.log(JSON.stringify(u, null, 2)));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

list();
