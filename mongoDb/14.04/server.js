const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dishRoutes = require('./routes/dishRoutes');
require('dotenv').config({path: './config/.env'});

const app = express();
connectDB(); //connect to the database

app.use(express.json()); //parse json data from requests
app.use("/user", userRoutes); //use user routes
app.use("/dish", dishRoutes); //use dish routes

const PORT = process.env.PORT || 5000; //port from env file or default 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});