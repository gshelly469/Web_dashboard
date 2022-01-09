const express = require('express');
const route = express.Router();
const college = require('../models/post_schema');

route.get('/', async (req, res)=>{
    console.log('in get');

    try{
    const sub = await college.aggregate([{
        '$group':{
            "_id":"$GRN_Date",
            "sum_qty":{"$sum":{"$toDouble":"$Qty"}}
        }
    },
    {
        $sort:{
            "_id":1
        }
    }
]);
    // console.log(sub);
    res.send(sub);
}
catch(err){
    console.log(err);
}
    // console.log(sub);
    // res.send(sub);
});

route.get('/suppliers', async (req, res) => {
try{
    const suppliers_data = await college.aggregate([
        {
            "$group":{
                "_id":"$Supplier Name",
                "supp_sum_qty":{"$sum":{"$toDouble":"$Qty"}},
                "supp_sum_netAmount":{"$sum":{"$toDouble":"$Net Amt"}}
            }
        },
        {
            "$sort":{
                "supp_sum_netAmount":-1
            }
        },
        {
            "$limit":5
        }
    ]);
    res.send(suppliers_data);
}
catch (err){
    console.log(err);
}
    
});

module.exports = route;