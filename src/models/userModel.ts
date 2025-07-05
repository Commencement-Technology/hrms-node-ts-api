import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user-interface";
import { timeStamp } from "console";

interface IUserModel extends IUser, Document {}

export const userSchema = new Schema<IUserModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps:true });

const userModel = mongoose.model<IUserModel>(`User`,userSchema);

export default userModel;