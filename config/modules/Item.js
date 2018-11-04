const mongoose = reguire('mongoose')
const Schema = mongoose.Schema

//Create Scheme
const ItemScheme = new ItemScheme({
    name: {
        type: string,
        reguired: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemScheme)
