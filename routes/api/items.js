const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../modules/Item')

//@route    GET api/items
//@desc     Get All Items
//@access   Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ data: -1 })
        .then(items => res.json(items)) 
})

module.exports = router