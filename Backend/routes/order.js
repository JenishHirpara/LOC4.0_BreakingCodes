const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const Inventory = require('../models/Inventory')
const sendEmail = require('../nodemailer')
const Razorpay = require('razorpay')
router.post('/', async (req, res) => {
    try {
        const order = await Order.create(req.body)

        console.log(order)

        sendEmail(order)

        res.send(order)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })

        const inventory = await Inventory.find({ name: order.name })
        console.log(inventory)
        inventory[0].stock_quantity += order.quantity
        console.log(inventory[0].stock_quantity)

        const inventory1 = await Inventory.findByIdAndUpdate(
            inventory[0]._id,
            {
                $set: {
                    stock_quantity: inventory[0].stock_quantity
                }
            },
            { new: true })

        console.log(order)
        res.send(order)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({})
        console.log(orders)
        res.send(orders)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

router.post('/create/:id', async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id)

        const order = await Order.create({
            name: inventory.name,
            complete: false,
            vendorName: 'Heth',
            quantity: 5,
            url: 'https://m.media-amazon.com/images/I/61cbQrV2WKL._SL1500_.jpg'
        })

        console.log(sendEmail(order))

        res.send(order)

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router