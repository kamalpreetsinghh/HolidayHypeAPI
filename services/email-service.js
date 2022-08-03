const nodemailer = require("nodemailer");

const sendEmail = async (attachment, email, type) => {
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  await transporter
    .sendMail({
      attachments: [
        {
          filename: "Invoice.pdf",
          content: attachment,
        },
      ],
      from: process.env.EMAIL,
      to: email,
      subject: `Invoice for ${type} Booking`,
      text: `Dear Sir, PFA the attached invoice for your ${type} booking through Holiday Hype App`,
      html: "",
    })
    .then(() => console.log("Email Sent"))
    .catch((error) => console.log(`Error While Sending Email ${error}`));
};

module.exports = { sendEmail };
