import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import restaurantRoutes from './routes/restaurants.js'
import customerRoutes from './routes/customers.js'
import dishRoutes from './routes/dishes.js'

const port = 4000;
const app = express();
app.use(express.json());
dotenv.config();
 
mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log('connected'))
  .then(()=> app.listen(port, ()=>console.log(`You are listening to port ${port}!`)))
  .catch(err=>console.log(err));    

app.use('/restaurants', restaurantRoutes)
app.use('/customers', customerRoutes)
app.use('/dishes', dishRoutes)