const mongoose = require('mongoose');
const {Schema} = mongoose;

const collectionName = 'saveSome';

const someSchema = new Schema(
    {
        name:{
            type:String,
            required:false
        },
        age:{
            type:Number,
            required:false
        }
    }
);

const Some = mongoose.model(collectionName, someSchema);

module.exports = Some;