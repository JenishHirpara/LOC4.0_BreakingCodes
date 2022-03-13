const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/', async (req, res) => {
    // console.log(await sendEmail())
    res.send({ msg: 'Welcome to the contact keeper api' })
})

app.use('/api/orders', require('./routes/order'));
app.use('/api/inventory', require('./routes/inventory'));


const PORT = process.env.PORT || 8020;

app.listen(PORT, () => {
    console.log(`Listening to post ${PORT}`)
})

module.exports = app;