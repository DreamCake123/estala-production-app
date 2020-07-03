const express = require('express');
const router = express.Router();
const productionData = require('../models/productionData');

router.post('/new', async (req, res) => {
    
    var newJob = new productionData({
        typeName: req.body.typeName,
        jobReward: req.body.jobReward,
        ownerName: req.body.ownerName,
    });
    try{
        _newJob = await newJob.save()
        res.status(201);
        res.render('success', {data: _newJob});
    }catch(e){
        res.status(500);
        res.render('failed', {data: e});
    }
});
router.post('/accept', async (req, res) => {
    try{
        id = req.body.jobObjectId;
        name = req.body.producerName;
        result = productionData.findByIdAndUpdate(id, {producerName: name} )
        res.render('success', {data: result});
    }catch(e){
        res.status(500);
        res.render('failed', {data: e});
    }

});
router.post('/complete', async (req, res) => {
    id = req.body.jobObjectId;
    productionData.findByIdAndRemove(id).then(
        (result) => {
            res.render('success', {data: result});
        }
    );
});
router.post('/cancel', async (req, res) => {
    id = req.body.jobObjectId;
    productionData.findByIdAndRemove(id).then(
        (result) => {
            res.render('success', {data: result});
        }
    );
});

module.exports = router