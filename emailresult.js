var nodemailer = require("nodemailer");
var credentials = require("./credentials.js");

module.exports = function (req) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.username || credentials.username,
      pass: process.env.pass || credentials.pass,
    },
  });
  var mailOptions = {
    from: credentials.username,
    to: req.body.email,
    subject: "Test email",
    text: req.body.uniquecode,
  };
  console.log("Email servive commented right now");
  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) console.log(error);
  //     else console.log("Email sent:" + info.response);
  //   });
};
