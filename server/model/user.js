import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    role: String,
    number: Number,
    dob: Date
})

export const userModel = mongoose.model('users', userSchema)