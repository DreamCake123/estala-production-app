const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
    typeName: {
        type: String,
        required: true,
    },
    typeId: {
        type: String,
        required: false,
    },
    ownerName: {
        type: String,
        required: true,
    },
    producerName: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('productionData', jobsSchema);