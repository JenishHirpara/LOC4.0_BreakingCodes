const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', async (req, res) => {
    // console.log(await sendEmail())
    res.send({ msg: 'Welcome to the contact keeper api' })
})

app.use('/api/orders', require('./routes/order'));

const PORT = process.env.PORT || 8020;

app.listen(PORT, () => {
    console.log(`Listening to post ${PORT}`)
})

module.exports = app;