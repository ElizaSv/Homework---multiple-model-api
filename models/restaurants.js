import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    owner: {
        type: String
    },
    location: {
        type: String
    },
    offersVegan: {
        type: Boolean,
        required: true
    },
    veganDishes: {
        type: [String]
    },
    frequentCustomers: {
        type: [String],
        default: []
    }
});

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);
export default restaurantModel