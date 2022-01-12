const express = require("express");
const app = express();
const mongoose = require('mongoose');
const getusers = require('./routers/getusers')
require('dotenv/config');

mongoose.connect(process.env.url, ()=> console.log('db connected'));

app.use(express.json());

app.use('/getAllUsers', getusers);

// First store env variable in the Settings-->Config Vars
if (process.env.env === 'Production'){
    app.use('/client/build')
}


app.listen(process.env.PORT || 5000, ()=> console.log('Backend listening from port 5000'));