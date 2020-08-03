const nodemailer = require("nodemailer");
const auth = require("./credentials");
const { userEmail, adminEmail } = require("../../public/email/index");

const sendEmail = async ({ name, lastName, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: "palta.tech",
    port: 465,
    secure: true,
    service: "gmail",
    auth,
  });

  const notificationToUser = {
    from: '"Palta Tech 🥑" <hello@palta.tech>',
    to: email,
    subject: "Hello from Palta Tech 🥑",
    text: "We received your contact successfully!",
    html: userEmail(name, lastName),
  };

  const notificationToAdmin = {
    from: '"Palta Tech 🥑" <hello@palta.tech>',
    to: auth.user,
    subject: "Contact received 🥑🚀",
    text: "A new potential customer sent an E-Mail! 🎉",
    html: adminEmail({ name, lastName, email, message }),
  };

  await transporter.sendMail(notificationToUser);
  await transporter.sendMail(notificationToAdmin);
};

module.exports = sendEmail;
