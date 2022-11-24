import express from "express";
import { user } from "../models/user.js";
import nodemailer from "nodemailer";

const router = express.Router();

const userInit = {
  name: "",
  email: "",
  password: "",
};

const otpVerification = async (email) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anmolverma102002@gmail.com",
        pass: process.env.EMAILPASSWORD,
      },
    });
    var mailOptions = {
      from: "anmolverma102002@gmail.com",
      to: email,
      subject: "OTP for SignUP",
      html: `
      <h1>OTP is</h1>
      <p>${otp}</p>
      `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return otp;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

router.get("/api/signup", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup" method="post"><input type="text" id="name" placeholder="Full Name" name="usernaem" /><input type="email" id="email" placeholder="Email" name="email" /><input type="password" id="password" placeholder="Password" name="password" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup", async (req, res) => {
  // Navitate to verifyEmail
  const { name, email, password } = req.body;
  //Do a check for above three variable
  userInit.name = name;
  userInit.email = email;
  userInit.password = password;
  console.log(name, email, password);
  const alreadyUsedEmail = await user.findOne({ email: email });
  if (alreadyUsedEmail) {
    console.log("Email already Present, try to Signin");
    return res.status(200).send({ message: "Email already in use" });
  }
  try {
    if (true) {
      //Check if email and password are valid, also  *** hash the password using Middleware ***
      // Send OPT to email default OPT 123456
      // res.send({ name: name, email: email, password: password });
      const corrOTP = otpVerification(email);
      return res.status(200).send({
        success: true,
        message: `OPT sent to ${email.substring(0, 3)}... email`,
      });
    }
  } catch (error) {
    res.send({ success: false, message: error });
  }
});

export { router as signUp, userInit };
