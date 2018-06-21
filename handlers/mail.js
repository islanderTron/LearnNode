const nodemailer = require("nodemailer");
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS 
    }
});

transport.sendMail({
    from: 'pju93@hotmail.com',
    to: 'randy@example.com',
    subject: 'Just trying things out!',
    html: 'Hey I <strong>love</strong> you.',
    text: 'Hey I **love** you'
});

// exports.send = async (options) => {
//     const mailOptions = {
//         from: `Paul Uncangco <noreply@islandertron.com>`,
//         subject: options.subject,
//         to: options.user.email,
//         html: 'This will be filled in later',
//         text: 'THis will also be filled in later'
//     };
//     const sendMail = promisify(transport.sendMail, transport);
//     return sendMail(mailOptions);
// }