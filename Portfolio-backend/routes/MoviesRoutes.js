import express from 'express';
const router = express.Router();


//controllers 


import { createMovie ,getAllMovies ,getSpecificMovie ,updateMovie ,movieReview ,deleteMovie ,deleteComment} from '../controllers/movieController.js';

//middlewares
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';

import checkId from '../middleware/checkId.js';


//public Routes
router.get('/all-movies', getAllMovies);
router.get('/specific-movie/:id', getSpecificMovie);



//risticted Routes
router.post('/:id/review', authenticate, checkId, movieReview);


//admin Routes

router.post('/create-movie', authenticate, authorizeAdmin, createMovie);
router.put('/update-movie/:id', authenticate, authorizeAdmin, updateMovie);
router.delete('/delete-movie/:id', authenticate, authorizeAdmin, deleteMovie);
router.delete('/delete-comment', authenticate, authorizeAdmin, deleteComment);
export default router;