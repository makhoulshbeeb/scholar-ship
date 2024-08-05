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
    }
});

export const User = mongoose.model("Lesson", lessonSchema);