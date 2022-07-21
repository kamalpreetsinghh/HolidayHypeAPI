const nodemailer = require("nodemailer");

const sendEmail = async (attachment) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "kamalpreetsiingh@gmail.com",
      pass: "yjsrserfbshslmuw",
    },
  });

  await transporter
    .sendMail({
      attachments: [
        {
          filename: "ticket.pdf",
          content: attachment,
        },
      ],
      from: "kamalpreetsiingh@gmail.com",
      to: "kamalpreetsingh025@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    })
    .then(() => console.log("Email Sent"))
    .catch((error) => console.log(`Error While Sending Email ${error}`));
};

const sendHotelEmail = async (attachment, email) => {
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "holidayhypee@outlook.com",
      pass: "Holidayhype",
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
      from: "holidayhypee@outlook.com",
      to: email,
      subject: "Invoice for Hotel Booking",
      text: "Dear Sir, PFA the attached invoice for your hotel booiking through Holiday Hype App",
      html: "",
    })
    .then(() => console.log("Email Sent"))
    .catch((error) => console.log(`Error While Sending Email ${error}`));
};

module.exports = { sendEmail, sendHotelEmail };
