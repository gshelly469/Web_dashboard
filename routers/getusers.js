const express = require('express');
const route = express.Router();
const college = require('../models/post_schema');

route.get('/', async (req, res)=>{
    console.log('in get');

    // const data = new college({
    //     "Item Name":req.body.item_name,
    //     "Qty":req.body.Qty,
    //     "Center Name":req.body.center_name,
    //     "GRN_Date":req.body.grn_date
    // });

    // data.save().then( data=> {
    //     res.send(data);     
    // }).catch(err => {
    //     res.json({message:err});
    // });
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

module.exports = route;