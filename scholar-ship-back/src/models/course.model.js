import mongoose, { Schema } from "mongoose";

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
        type: Array,
        required: true,
    }

});

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
    }
});

export const User = mongoose.model("Course", courseSchema);