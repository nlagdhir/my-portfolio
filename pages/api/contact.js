import nodemailer from "nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === "" ||
      !phone ||
      phone.trim() === "" ||
      !subject ||
      subject.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input!",
      });
      return;
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      }, 
    });

    let mailOptions = {
      from: "nlagdhir@gmail.com",
      to: "nlagdhir@gmail.com",
      subject: subject,
      html:
        '<h1 style="color:blue;">Hello Nilesh, </h1> <br> <br>' +
        '<p style="font-size:18px;">Here is details from user. </p>' +
        `<ul><li><b>Name</b> ${name}</li><li><b>Phone</b> ${phone}</li><li><b>Email</b> ${email}</li><li><b>Subject</b> ${subject}</li><li><b>Message</b> ${message}</li></ul>`,
    }; 

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({
          status: false,
          message: "Something went wrong!, Please try again later!",
          data: error,
        });
      } else {
        return res.status(200).json({
          status: true,
          message: "Email Sent, We will get back to you soon!",
          data: info,
        });
      }
    });
  }
};

export default handler;
