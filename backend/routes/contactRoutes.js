// const Contact = require("../models/Contact");

// const sendContactMessage = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const contact = await Contact.create({ name, email, message });

//     return res.status(201).json({
//       success: true,
//       message: "Message received successfully",
//       data: contact,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

// module.exports = { sendContactMessage };


const express = require("express");
const router = express.Router();

const { sendContactMessage } = require("../controllers/contactController");

router.post("/", sendContactMessage);

module.exports = router;