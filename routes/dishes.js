import express from 'express';
const router = express.Router();
import {createDish, allDishes, findDishById, findDishByTitle, updateDishById,updateDishByTitle, deleteDish} from '../controllers/dishes.js'

router.post('/create', createDish)
router.get('/all', allDishes)
router.get('/:dishId', findDishById)
router.get('/:title', findDishByTitle)
router.patch('/:dishId', updateDishById)
router.patch('/:title', updateDishByTitle)
router.delete('/:dishId', deleteDish)

export default router