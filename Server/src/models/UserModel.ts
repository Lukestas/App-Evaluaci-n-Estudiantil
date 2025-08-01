import mongoose, { Schema } from "mongoose";
import { User } from "../types/UsersTypes";

const UserSchema: Schema = new Schema<User>(
    {
        document: {
            type: Number,
            required: true,
            unique:true
        },
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: Number,
            required: true
        }
    }, {
    timestamps: true,
    versionKey: false
}
)

export const UserModel = mongoose.model<User>("User", UserSchema)