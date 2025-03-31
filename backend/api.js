const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// File paths for JSON data
const DB_PATH = path.join(__dirname, '../database');
const FILES = {
    hospitals: path.join(DB_PATH, 'hospitals.json'),
    bloodbanks: path.join(DB_PATH, 'bloodbanks.json'),
    donors: path.join(DB_PATH, 'donors.json')
};

// Helper function to read JSON file
const readData = (filePath) => {
    try {
        if (!fs.existsSync(filePath)) return [];
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
};

// Helper function to write JSON data
const writeData = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing file ${filePath}:`, error);
    }
};

// ✅ GET: Fetch all hospitals
router.get('/hospitals', (req, res) => {
    const hospitals = readData(FILES.hospitals);
    res.json(hospitals);
});

// ✅ GET: Fetch all blood banks
router.get('/bloodbanks', (req, res) => {
    const bloodbanks = readData(FILES.bloodbanks);
    res.json(bloodbanks);
});

// ✅ GET: Fetch all donors
router.get('/donors', (req, res) => {
    const donors = readData(FILES.donors);
    res.json(donors);
});

// ✅ POST: Register a new donor
router.post('/register', (req, res) => {
    const { firstName, lastName, phoneNumber, mailAddress, bloodType, dateOfBirth, donorType } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !phoneNumber || !mailAddress || !bloodType || !dateOfBirth || !donorType) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const donors = readData(FILES.donors);

    // Create new donor entry
    const newDonor = { firstName, lastName, phoneNumber, mailAddress, bloodType, dateOfBirth, donorType };
    donors.push(newDonor);

    writeData(FILES.donors, donors);

    res.json({ msg: '✅ Donor registered successfully!', donor: newDonor });
});

module.exports = router;
