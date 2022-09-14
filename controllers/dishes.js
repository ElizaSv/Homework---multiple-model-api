import dishModel from '../models/dishes.js';

export const createDish = async (req, res) => {
    try {
        const dish = new dishModel(req.body);
        await dish.save()
        res.status(201).json({message: `New dish named ${dish.title} added to db` })
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "Cannot add new dish"})
    }
}
export const allDishes= async(req, res) => {
    try {
       const allDishes = await dishModel.find();
       res.status(200).json(allDishes)
    } catch (error) {
        console.error(error);
    }
}
export const findDishById = async(req, res) => {
    try {
        const findDish = await dishModel.findById(req.params.dishId)
        res.status(302).json(findDish)
    } catch (error) {
        console.error(error);
    }
}
export const findDishByTitle = async(req, res) => {
    try {
        const findDish = await dishModel.findOne({name: req.params.title})
        res.status(302).json(findDish)
    } catch (error) {
        console.error(error);
    }
}
export const updateDishById = async(req, res) => {
    try {
        const extractDish = await dishModel.findByIdAndUpdate(req.params.dishId, {$set: req.body}, {new: true});
        res.status(201).json(extractDish)
    } catch (error) {
        res.status(400).send("Dish was not updated!")
        console.error(error);  
    }
}
export const updateDishByTitle = async(req, res) => {
    try {
        const extractDish = await dishModel.findOneAndUpdate({title: req.params.title}, {$set: req.body}, {new: true});
        res.status(201).json(extractDish)
    } catch (error) {
        res.status(400).send("Dish was not updated!")
        console.error(error);  
    }
}
export const deleteDish = async(req, res) => {
try {
    await dishModel.findByIdAndDelete(req.params.dishId);
    res.status(301).send("Dish successfully deleted")

} catch (error) {
    console.error(error)
    res.status(400).send("Something went wrong")
}
}
