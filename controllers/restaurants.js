import customerModel from '../models/customers.js';
import dishModel from '../models/dishes.js';
import restaurantModel from '../models/restaurants.js';

export const createRestaurant = async (req, res) => {
    try {
        const restaurant = new restaurantModel({...req.body});
        
        const customerSelection = await customerModel.find({favouriteRestaurants: restaurant.name});
        console.log(customerSelection)
        restaurant.frequentCustomers = customerSelection;
        const dishSelection = await dishModel.find({isVegan: true});
        restaurant.offersVegan===true ? restaurant.veganDishes = dishSelection: null;
        await restaurant.save()
        res.status(201).json({message: `New restaurant named ${restaurant.name} added to db` })
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "Cannot create new restaurant"})
    }
};
export const allRestaurants = async(req, res) => {
    try {
       const allRestaurants = await restaurantModel.find();
       res.status(200).json(allRestaurants)
    } catch (error) {
        console.error(error);
    }
}
export const findRestaurantById = async(req, res) => {
    try {
        const findRestaurant = await restaurantModel.findById(req.params.restId)
        res.status(302).json(findRestaurant)
    } catch (error) {
        console.error(error);
    }
}
export const findRestaurantByName = async(req, res) => {
    try {
        const findRestaurant = await restaurantModel.findOne({name: req.params.name})
        res.status(302).json(findRestaurant)
    } catch (error) {
        console.error(error);
    }
}
export const updateRestaurantById = async(req, res) => {
    try {
        const extractRestaurant = await restaurantModel.findByIdAndUpdate(req.params.resttId, {$set: req.body}, {new: true});
        res.status(201).json(extractRestaurant)
    } catch (error) {
        res.status(400).send("Restaurant was not updated!")
        console.error(error);  
    }
}
export const updateRestaurantByName = async(req, res) => {
    try {
        const extractRestaurant = await restaurantModel.findOneAndUpdate({name: req.params.name}, {$set: req.body}, {new: true});
        res.status(201).json(extractRestaurant)
    } catch (error) {
        res.status(400).send("Restaurant was not updated!")
        console.error(error);  
    }
}
export const deleteRestaurant = async(req, res) => {
try {
    await restaurantModel.findByIdAndDelete(req.params.restId);
    res.status(301).send("Restaurant successfully deleted")

} catch (error) {
    console.error(error)
    res.status(400).send("Something went wrong")
}
}
