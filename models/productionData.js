const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
    jobReward: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    typeName: {
        type: String,
        required: true,
    },
    typeId: {
        type: String,
        default: "~Not provided~",
    },
    ownerName: {
        type: String,
        required: true,
    },
    producerName: {
        type: String,
    },
});

module.exports = mongoose.model('productionData', jobsSchema);