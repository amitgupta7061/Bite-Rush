import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true, min: 1 },
            price: { type: Number, required: true, min: 0 },
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    payment: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Cancelled", "Completed"],
        default: "Pending",
    }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
