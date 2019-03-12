const mongoose = require('mongoose');
const mongoose_paginate = require('mongoose-paginate');

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

productSchema.plugin(mongoose_paginate);

mongoose.model('Product',productSchema);