import express from "express";
import { user } from "../models/user";
import { Otp } from "../models/Otp";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

const router = express.Router();

const userInit = {
  name: "",
  email: "",
  password: "",
};

const otpVerification = async (email: string) => {
  try {
    // *** This will give a 4 digit OTP code ***
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
    const newOtp = Otp.build({
      email: email,
      otp: otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 600000,//Code expires in 10 minutes
    });
    const newOtpRes = await newOtp.save();
    console.log(newOtpRes);
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return Otp;
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
  const { name, email, password } : {name : string,email : string, password : string} = req.body;
  //Do a check for above three variable
  userInit.name = name;
  userInit.email = email;

  //Password hashing
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  userInit.password = secPass;
  console.log(name, email, secPass);

  const alreadyUsedEmail = await user.findOne({ email: email });
  if (alreadyUsedEmail) {
    console.log("Email already Present, try to Signin");
    return res.status(200).send({ message: "Email already in use" });
  }
  try {
    if (true) {
      //Check if email and password are valid, also  *** hash the password using Middleware ***
      // Send OPT to email default OPT 123456
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
