const nodemailer = require('nodemailer')

const sendMail = (order) => {
    // const { restroEmail, password, to, subject, body } = mailInfo
    // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    console.log('hello')
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `ddemo0137@gmail.com`,
            pass: `Test1234%^&`
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const date = new Date(order.date);

    let mailOptions = {
        from: `ddemo1307@gmail.com`,
        to: `hethgala@gmail.com`,
        subject: `New order`,
        html: `<h1>I have a new order to place</h1>
        <h3>Product Name: ${order.name}<h3>
        <h3>Product Quantity: ${order.quantity}</h3>
        <h4>Vendor Name: ${order.vendorName} </h4>
        <h4>Date of order: ${date.toDateString()} </h4>
        <h5> Please Notify me once the order is ready for delivery</h5>
        `
    };

    return transporter.sendMail(mailOptions)
}

module.exports = sendMail