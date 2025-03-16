const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');

const app = express();
const dotenv = require('dotenv');
dotenv.config();

// mongoose
// K4e5btpEUeiECxSf

// connect to db
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log("Connection Failed",err));

app.use(express.json());
app.use('/api/users', require(userRoute));