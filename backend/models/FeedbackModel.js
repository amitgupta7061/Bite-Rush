import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

export default mongoose.model("Feedback", feedbackSchema);
