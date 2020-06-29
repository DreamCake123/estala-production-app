const express = require('express');
const router = express.Router();
const productionData = require('../models/productionData');

router.post('/', async (req, res) => {
    var bp = new productionData({
        typeName: req.body.typeName,
        typeId: req.body.typeId,
        ownerName: req.body.ownerName,
    });
    try{
        bp.save().then(
            (_bp) => {
                res.status(201);
                res.render('success', {data: _bp})
        });
    }catch(e){
        res.status(500);
    }
});

module.exports = router