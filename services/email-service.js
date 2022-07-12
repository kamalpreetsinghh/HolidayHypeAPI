const nodemailer = require("nodemailer");

const sendEmail = async (attachment) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "kamalpreetsiingh@gmail.com", 
            pass: "yjsrserfbshslmuw", 
        }
      });

    await transporter.sendMail({
        attachments: [{
            filename: 'invoice.pdf',
            content: attachment
        }],
        from: 'kamalpreetsiingh@gmail.com',
        to: "kamalpreetsingh025@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>"
    }).then(() => console.log('Email Sent'))
    .catch((error) => console.log(`Error While Sending Email ${error}`));
}

module.exports = { sendEmail }