const mongoose = require('mongoose');

const bpsSchema = new mongoose.Schema({
    typeName: {
        type: String,
        required: true,
    },
    typeId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Blueprint', bpsSchema);