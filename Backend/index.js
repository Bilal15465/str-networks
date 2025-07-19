// index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./helper");

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());

// Parse JSON requests
app.use(bodyParser.json());

// API endpoint
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, companyName, jobTitle, message } =
    req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      status: "failed",
      message: "Missing required fields",
    });
  }

  const result = await sendEmail({
    firstName,
    lastName,
    email,
    companyName,
    jobTitle,
    message,
  });

  if (result.status === "success") {
    return res.status(200).json(result);
  } else {
    return res.status(500).json(result);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
