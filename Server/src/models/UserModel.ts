import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    iddocument: number;
    name: string;
    email: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    iddocument: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

export const User = mongoose.model<IUser>("User", userSchema);