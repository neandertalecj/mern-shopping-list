const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/Item')

//@route    GET api/items
//@desc     Get All Items
//@access   Public
router.get('/', (req, res) => {
    console.log("1111")
    // Item.find({name: "Second object"})
    Item.find()
        // .sort({ name: 1 })
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// @route  POST api/items
// @desc   Create An Item
// @accexs Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})

// @route    DELETE api/items/:id
// @desc     Delete A Item
// @access   Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router