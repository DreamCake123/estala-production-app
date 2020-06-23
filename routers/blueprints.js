const express = require('express');
const router = express.Router();
const Blueprint = require('../models/Blueprint');

router.get('/', async (req, res) => {
    try{
        data = Blueprint.find()
        renderedHtml = res.render('index', data)
    }catch(err){
        res.status(500).send(err.message)
    }
});
router.post('/', async (req, res) => {
    var bp = new Blueprint({
        typeName: req.body.typeName,
        typeId: req.body.typeId,
    });
    try{
        var _bp = await bp.save();
        res.status(201).json(_bp);
    }catch(e){
        res.status(500).header(e.message)
    }
});
// router.patch('/:id', async (req, res) => {
    
// });
// router.delete('/:id', async (req, res) => {
    
// });

module.exports = router;