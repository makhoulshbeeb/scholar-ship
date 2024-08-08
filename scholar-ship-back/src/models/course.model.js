import mongoose, { Schema } from "mongoose";
import { Lesson } from "./lesson.model.js";


const courseSchema = new Schema({
    name: {
        type: String,
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
    lessons: {
        type: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson' 
        }], 
        default:[]}
});

export const Course = mongoose.model("Course", courseSchema);