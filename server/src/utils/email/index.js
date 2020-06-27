const nodemailer = require("nodemailer");
const auth = require("./credentials");

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: "palta.tech",
    port: 465,
    secure: true,
    service: "gmail",
    auth,
  });

  const options = {
    from: '"Palta Tech 🥑" <hello@palta.tech>',
    to: "aleetidele@hotmail.com",
    subject: "Hello from Palta Tech 🥑",
    text: "We received your contact successfully!",
    html: require("../../public/email/index"),
  };

  await transporter.sendMail(options);
};

module.exports = sendEmail;
