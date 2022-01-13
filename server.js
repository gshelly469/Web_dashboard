const express = require("express");
const app = express();
const mongoose = require('mongoose');
const getusers = require('./routers/getusers')
const path = require('path');
require('dotenv/config');

mongoose.connect(process.env.url, ()=> console.log('db connected'));

app.use(express.json());

app.use('/getAllUsers', getusers);

// First store env variable in the Settings-->Config Vars
if (process.env.env === 'Production'){
    app.use(express.static('/client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}


app.listen(process.env.PORT || 5000, ()=> console.log('Backend listening from port 5000'));