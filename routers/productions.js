const express = require('express');
const router = express.Router();
const productionData = require('../models/productionData');

router.get('/', async (req, res) => {
    //blueprintsData.find().then((_data) => res.send(_data));
    res.set('Content-Type', 'text/html');
    try{
        productionData.find().then(
            (_data) => {
                res.render('index', {data: _data});})
    }catch(e){
        res.status(500);
    }
});
// router.patch('/:id', async (req, res) => {
    
// });
// router.delete('/:id', async (req, res) => {
    
// });

module.exports = router;