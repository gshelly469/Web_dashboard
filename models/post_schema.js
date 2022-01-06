const mongoose = require('mongoose');

const college = new mongoose.Schema({
    "Item Name":{type:String},
    "Qty":{type:String},
    "Center Name":{type:String},
    "GRN_Date":{type:String}
})

module.exports = mongoose.model('college', college, 'college')