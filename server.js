const express = require("express");
const app = express();
const mongoose = require('mongoose');
const getusers = require('./routers/getusers')
require('dotenv/config');

mongoose.connect(process.env.url, ()=> console.log('db connected'));

app.use(express.json());

app.use('/getAllUsers', getusers);


app.listen(process.env.PORT || 5000, ()=> console.log('Backend listening from port 5000'));