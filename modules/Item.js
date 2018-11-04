const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Scheme
const ItemSchema = new Schema({
    name: {
        type: String,
        reguired: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)
