import mongoose, { Schema } from "mongoose";
import { Course } from "./course.model.js";

const userSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    username: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
    age: {
        type: Number,
    },
    history: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    isAdmin: {
        type: Boolean,
        default: false
    }

});

export const User = mongoose.model("User", userSchema);