const express = require('express')
const router = express.Router()
const Inventory = require('../models/Inventory')

router.post('/', async (req, res) => {
    try {
        const inventory = await Inventory.create(req.body)
        res.send(inventory)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

router.get('/', async (req, res) => {
    try {
        const inventories = await Inventory.find({})

        console.log(inventories)

        res.send(inventories)

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})
module.exports = router
