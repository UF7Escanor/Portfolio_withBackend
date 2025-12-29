import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        required:true,
        unique:true,
        maxLength:30,
    }

});

export default mongoose.model("Genre", genreSchema);