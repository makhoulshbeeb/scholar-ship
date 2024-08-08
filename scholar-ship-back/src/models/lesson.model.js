import mongoose, { Schema } from "mongoose";

const lessonSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    video:{
        type:String,
        required: true,
    }
});

export const Lesson = mongoose.model("Lesson", lessonSchema);