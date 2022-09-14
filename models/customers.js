import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    city: {
        type: String,
        required: true
    },
    isVegan: {
        type: Boolean,
        required: true
    },
    favouriteRestaurants: {
        type: String,
        required: true
    }
});

const customerModel = mongoose.model('Customer', customerSchema);
export default customerModel