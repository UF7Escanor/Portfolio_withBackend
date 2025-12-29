import express from 'express';


//  controllers
import { createUser , loginUser , logCurrentUser ,getAllUsers, getCurrentUserProfile , UpdateCurrentUserProfile ,deleteUser ,updateUserProfileByAdmin} from '../controllers/userController.js';


 


//middlewares

import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';



const router = express.Router();

router.route('/').post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post("/auth",loginUser);
router.post("/logout",logCurrentUser); 
router.delete('/delete-user/:id',authenticate,authorizeAdmin, deleteUser);

router.route('/profile').get(authenticate, getCurrentUserProfile).put(authenticate, UpdateCurrentUserProfile);
router.put('/update-user/:id',authenticate,authorizeAdmin, updateUserProfileByAdmin);

export default router;