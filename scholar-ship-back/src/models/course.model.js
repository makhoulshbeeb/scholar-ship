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
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson' }]

});

export const Course = mongoose.model("Course", courseSchema);