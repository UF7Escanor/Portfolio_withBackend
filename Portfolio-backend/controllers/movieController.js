
import Movie from "../models/Movie.js";

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ message: 'Server Error ', error: error.message });
  }
}
const getAllMovies = async (req, res) => {
  try {
    // const movies = await Movie.find().populate('genre').populate('cast');
    // res.status(200).json(movies);

    const movies = await Movie.find()
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server Error ', error: error.message });
  }
}
const getSpecificMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    } 

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server Error ', error: error.message });
  }
}
const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const updatedData = req.body; 

    const updatedMovie = await Movie.findByIdAndUpdate(movieId, updatedData, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: 'Server Error ', error: error.message });
  }
}


const movieReview = async (req, res) => {

    try {
    const movieId = req.params.id;
    const { rating, comment } = req.body;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const alreadyReviewed = movie.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      return res.status(400).json({ message: 'Movie already reviewed' });
    }

    const review = {
      name: req.user.username,
      rating: Number(rating),
      comment: comment,
      user: req.user._id,
    };

    movie.reviews.push(review);
    movie.numReviews = movie.reviews.length;
    movie.rating =
      movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
      movie.reviews.length;
    await movie.save();

    res.status(200).json(movie);
  }catch(error) {
    res.status(500).json({ message: 'Server Error ', error: error.message });
  } 
}
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error ', error: error.message });
  }
}
const deleteComment = async (req, res) => {
  try {
    const { movieId, reviewId } = req.body;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    } 
    const reviewIndex = movie.reviews.findIndex(
      (review) => review._id.toString() === reviewId
    );
    if (reviewIndex === -1) {
      return res.status(404).json({ message: 'Review not found' });
    }

    movie.reviews.splice(reviewIndex, 1);
    movie.numReviews = movie.reviews.length;
    if (movie.numReviews > 0) {
      movie.rating =
        movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
        movie.numReviews;
    } else {
      movie.rating = 0;
    }
    await movie.save();
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error ', error: error.message });
  }
}
export { createMovie ,getAllMovies ,getSpecificMovie ,updateMovie ,movieReview ,deleteMovie ,deleteComment}; 