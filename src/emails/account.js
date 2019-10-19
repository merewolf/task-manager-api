const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'roman.sikov@outlook.com',
        subject: ' Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'roman.sikov@outlook.com',
        subject: "We're sad to see you leave :(",
        text: `Thank you for trying out the app, ${name}. Could we ask you to tell us why you're leaving?`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}