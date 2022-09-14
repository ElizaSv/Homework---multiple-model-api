import express from 'express';
const router = express.Router();
import {createCustomer, allCustomers, findCustomerById, findCustomerByName,  updateCustomerById, updateCustomerByName, deleteCustomer} from '../controllers/customers.js'

router.post('/create', createCustomer)
router.get('/all', allCustomers)
router.get('/:customerId', findCustomerById)
router.get('/:name', findCustomerByName)
router.patch('/:customerId', updateCustomerById)
router.patch('/:name', updateCustomerByName)
router.delete('/:customerId', deleteCustomer)



export default router