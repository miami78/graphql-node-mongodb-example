import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    email: {
        type: String
    },
    createdAt: { 
        type: Date 
    },
    updatedAt: { 
        type: Date 
    },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;