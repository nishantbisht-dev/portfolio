const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const connectDB = require("./config/db");
// const contactRoutes = require("./routes/contactRoutes");

// dotenv.config();

// const app = express();

// connectDB();

// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://portfolio-main-vercel.netlify.app",
//   process.env.CLIENT_URL,
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allows requests from Postman, browser direct requests, and allowed frontend URLs
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.use("/api/contact", contactRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });