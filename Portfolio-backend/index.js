// imports
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';

//files
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import genreRoutes from './routes/genreRoutes.js';
import movieRoutes from './routes/MoviesRoutes.js';


//configurations
dotenv.config();
connectDB();  



const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());  
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
  

//routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/genre',genreRoutes);
app.use('/api/v1/movies',movieRoutes ); 

// error handler (should be after routes)
app.use(errorHandler);


//server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});