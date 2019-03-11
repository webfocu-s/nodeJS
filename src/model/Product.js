const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        requerid: true
    },
    description:{
        type: String,
        requerid: true
    },
    url:{
        type: String,
        requerid: true
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product',productSchema);