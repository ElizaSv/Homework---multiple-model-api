import customerModel from '../models/customers.js';

export const createCustomer = async (req, res) => {
    try {
        const customer = new customerModel(req.body);
        await customer.save();
        res.status(201).json({message: `New customer ${customer.name} added to db `});
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "Cannot add new customer"});
    }
};
export const allCustomers = async(req, res) => {
    try {
       const allCustomers = await customerModel.find();
       res.status(200).json(allCustomers)
    } catch (error) {
        console.error(error);
    }
}
export const findCustomerById = async(req, res) => {
    try {
        const findCustomer = await customerModel.findById(req.params.customerId)
        res.status(302).json(findCustomer)
    } catch (error) {
        console.error(error);
    }
}
export const findCustomerByName = async(req, res) => {
    try {
        const findCustomer = await customerModel.findOne({name: req.params.name})
        res.status(302).json(findCustomer)
    } catch (error) {
        console.error(error);
    }
}

export const updateCustomerById = async(req, res) => {
    try {
        const extractCustomer = await customerModel.findByIdAndUpdate(req.params.customerId, {$set: req.body}, {new: true});
        res.status(201).json(extractCustomer)
    } catch (error) {
        res.status(400).send("User was not updated!")
        console.error(error);  
    }
}
export const updateCustomerByName = async(req, res) => {
    try {
        const extractCustomer = await customerModel.findOneAndUpdate({name: req.params.name}, {$set: req.body}, {new: true});
        res.status(201).json(extractCustomer)
    } catch (error) {
        res.status(400).send("User was not updated!")
        console.error(error);  
    }
}
export const deleteCustomer = async(req, res) => {
try {
    await customerModel.findByIdAndDelete(req.params.customerId);
    res.status(301).send("Customer successfully deleted")

} catch (error) {
    console.error(error)
    res.status(400).send("Something went wrong")
}
}
