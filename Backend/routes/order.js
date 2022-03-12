const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const sendEmail = require('../nodemailer')

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

// //Register a User

// router.post('/register', [
//     check('name', 'Please enter a name').not().isEmpty(),
//     check('email', 'Enter a valid email address').isEmail(),
//     check('password', 'Please enter a valid password').isLength({ min: 6 })
// ], async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).send({
//             errors: errors.array()
//         })
//     }


//     const { name, email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });

//         if (user) {
//             return res.status(400).json({
//                 msg: 'User already exists'
//             })
//         }

//         user = new User({ name, email, password });

//         const salt = await bcrypt.genSalt(10);

//         user.password = await bcrypt.hash(password, salt);

//         await user.save();

//         const payload = {
//             user: {
//                 id: user.id
//             }
//         }

//         jwt.sign(payload, config.get('jwtSecret'), {
//             expiresIn: 10000000
//         }, (err, token) => {
//             if (err) throw err;
//             res.json({ token, user })
//         })
//     }
//     catch (error) {
//         console.log(error.message);
//         res.status(500).send('Server Error')
//     }
// })


// //Logging in the already registered user
// router.post('/login', [
//     check('email', 'Please enter a valid email id').isEmail(),
//     check('password', 'Password is required').exists()
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).send({
//             errors: errors.array()
//         })
//     }
//     const { email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({
//                 msg: 'User npot found'
//             })
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({
//                 msg: 'Incorrect password entered'
//             })
//         }

//         const payload = {
//             user: {
//                 id: user.id
//             }
//         }

//         jwt.sign(payload, config.get('jwtSecret'), {
//             expiresIn: 360000
//         }, (err, token) => {
//             if (err) throw err;
//             res.json({ token, user })
//         })

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({
//             msg: 'Server Error'
//         })

//     }
// })

// //Update user
// router.put('/:id', auth, async (req, res) => {
//     try {
//         const user = await User.findByIdAndUpdate(
//             req.params.id,
//             { $set: req.body },
//             { new: true })
//         const user1 = await User.findById(req.params.id)

//         res.status(201).send(user1)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({
//             msg: 'Server Error'
//         })
//     }


// })


// //Delete the existing user
// router.delete('/delete', auth, hasRoles(['heth']), async (req, res) => {
//     console.log(res.locals.user._id)
//     const deletedUser = await User.findByIdAndDelete(res.locals.user._id);
//     res.status(200).send({
//         msg: 'User deleted',
//         deletedUser
//     })
// })

// router.get('/', auth, async (req, res) => {
//     try {
//         const user = await User.findById(res.locals.user._id).select('-password')
//         res.json(user);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).json({ msg: "Server error" })
//     }
// })

module.exports = router