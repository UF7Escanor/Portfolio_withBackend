import Genre from "../models/Genre.js";
import asyncHandler from "../middleware/asyncHandler.js";

const createGenre = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body;

        if(!name){
            return res.status(400).json({ message: "Genre name is required" });
        }
        const existingGenre = await Genre.findOne({ name });
        if (existingGenre) {
            return res.status(400).json({ message: "Genre already exists" });
        }
        const genre = await new Genre({ name }).save();
        return  res.status(201).json({ message: "Genre created successfully", genre });  

    }catch (error) {
        console.error("Error creating genre:", error);
        return res.status(500).json({ message: "Server Error" });
        
    }
    
});
const updateGenre = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const genre = await Genre.findById(id);
        if (!genre) {
            return res.status(404).json({ message: "Genre not found" });
        }

        genre.name = name;
        const updatedGenre = await genre.save();
        return res.status(200).json({ message: "Genre updated successfully", genre: updatedGenre });

    } catch (error) {
        console.error("Error updating genre:", error);
        return res.status(500).json({ message: "Server Error" });
    }
});

const removeGenre = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const genre = await Genre.findById(id);
        if (!genre) {
            return res.status(404).json({ message: "Genre not found" });
        }

        await Genre.findByIdAndDelete(id);
        return res.status(200).json({ message: "Genre deleted successfully" });

    } catch (error) {
        console.error("Error deleting genre:", error);
        return res.status(500).json({ message: "Server Error" });
    }
});

const listGenres = asyncHandler(async (req, res) => {
    try {
        const all = await Genre.find({});
        return res.status(200).json({ all });
    } catch (error) {
        console.error("Error listing genres:", error);
        return res.status(500).json({ message: "Server Error" });
    }
});

const readGenre = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const genre = await Genre.findById(id);
        if (!genre) {
            return res.status(404).json({ message: "Genre not found" });
        }
        return res.status(200).json({ genre });
    } catch (error) {
        console.error("Error reading genre:", error);
        return res.status(500).json({ message: "Server Error" });
    }
});

export { createGenre ,updateGenre ,removeGenre ,listGenres, readGenre }; 