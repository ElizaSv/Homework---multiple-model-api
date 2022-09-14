import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    isVegan: {
        type: Boolean,
        required: true
    }
});

const dishModel = mongoose.model('Dish', dishSchema);
export default dishModel