
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const notes = require('../models/Notes');
const fetchuser = require('../middleware/middleware');
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes');



// Generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};


// ...

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ayu82.im@gmail.com',
      pass: 'my password',
    },
  });
  
  router.post('/send-otp', (req, res) => {
    const email = req.body.email;
  
    // Generate OTP
    const otp = generateOTP();
  
    // Save OTP in a database or in-memory storage for later verification
  
    // Compose email message
    const mailOptions = {
      from: 'ayush89.im@gmail.com', // Use the same email as in the transporter configuration
      to: email,
      subject: 'Email Verification OTP',
      text: `Your OTP for email verification is: ${otp}`,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Failed to send OTP');
      }
  
      console.log('Email sent: ' + info.response);
      res.status(200).send('OTP sent successfully');
    });
  });
  
  module.exports = router;
  