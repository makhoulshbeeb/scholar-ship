import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    _id : Schema.ObjectId,
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
    history: {
        type: Array,
    }
});

export const User = mongoose.model("User", userSchema);