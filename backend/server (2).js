require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Replaces bodyParser.json()
app.use(express.urlencoded({ extended: true }));

// Debugging: Check if .env variables are loaded
console.log("📩 Email User:", process.env.EMAIL_USER);
console.log("📌 Database Host:", process.env.DB_HOST);

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "orgo1234",
    database: process.env.DB_NAME || "orgo",
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed: " + err.message);
    } else {
        console.log("✅ Connected to MySQL database");
    }
});

// Nodemailer Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Store Query & Send Auto Reply
app.post("/api/submit-query", (req, res) => {
    console.log("📩 Incoming Request:", req.body); // ✅ Debugging

    const { name, email, topic, description } = req.body;

    if (!name || !email || !topic || !description) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    const query = "INSERT INTO queries (name, email, topic, description) VALUES (?, ?, ?, ?)";
    db.query(query, [name, email, topic, description], (err, result) => {
        if (err) {
            console.error("❌ Error saving query: " + err.message);
            return res.status(500).json({ success: false, message: "Database error" });
        }

        console.log("✅ Query saved to database");

        // Define Auto-reply Messages for Topics
        const topicReplies = {
            "Organ Donation Process": "Here’s how you can become an organ donor...",
            "Eligibility for Donation": "These are the criteria to become an organ donor...",
            "Legal Concerns": "Here’s what you need to know legally about organ donation...",
            "General Inquiry": "Thank you for reaching out! We will get back to you soon.",
        };

        const replyMessage = topicReplies[topic] || topicReplies["General Inquiry"];

        // Send Email Reply
        const mailOptions = {
            from: `"Organ Donation Support" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Response to Your Query on "${topic}"`,
            text: `Hi ${name},\n\n${replyMessage}\n\nBest regards,\nOrgan Donation Support Team`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("❌ Email sending failed: " + error.message);
                return res.status(500).json({ success: false, message: "Failed to send email" });
            }

            console.log("✅ Email sent: " + info.response);
            res.json({ success: true, message: "Query received and email sent!" });
        });
    });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
