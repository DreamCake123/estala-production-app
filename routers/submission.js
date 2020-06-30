const express = require('express');
const router = express.Router();
const productionData = require('../models/productionData');

router.post('/new', async (req, res) => {
    
    var newJob = new productionData({
        typeName: req.body.typeName,
        typeId: req.body.typeId,
        ownerName: req.body.ownerName,
    });
    try{
        newJob.save().then(
            (_newJob) => {
                res.status(201);
                res.render('success', {data: _newJob});
        });
    }catch(e){
        res.status(500);
    }
});
router.post('/accept', async (req, res) => {
    id = req.body.jobObjectId;
    name = req.body.producerName;
    productionData.findByIdAndUpdate(id, {producerName: name} ).then(
        (result) => {
            res.render('success', {data: result});
        }
    );
    
});


module.exports = router