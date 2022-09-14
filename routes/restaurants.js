import express from 'express';
const router = express.Router();
import {createRestaurant, allRestaurants, findRestaurantById,findRestaurantByName, updateRestaurantById,updateRestaurantByName, deleteRestaurant} from '../controllers/restaurants.js'

router.post('/create', createRestaurant)
router.get('/all', allRestaurants)
router.get('/:restId', findRestaurantById)
router.get('/:name', findRestaurantByName)
router.patch('/:restId', updateRestaurantById)
router.patch('/:name', updateRestaurantByName)
router.delete('/:restId', deleteRestaurant)

export default router