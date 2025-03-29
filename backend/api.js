const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

// Schemas for different collections in the database
const hospitalSchema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    Information:{
        type:String,
        require:true
    }
});
const bloodBankSchema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    }
});
const donorSchema=mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    mailAddress:{
        type:String,
        require:true
    },
    bloodType:{
        type:String,
        require:true
    },
    dateOfBirth:{
        type:String,
        require:true
    },
    donorType:{
        type:String,
        require:true
    }
});

const hospitalCollection=mongoose.model('hospitals',hospitalSchema);
const bloodBankCollection=mongoose.model('bloodbanks',bloodBankSchema);
const donorCollection=mongoose.model('donors',donorSchema);

// GET Functions for all the collections 
router.get('/hospitals', (req, res) => {
    hospitalCollection.find({  })
        .then((data) => {
            console.log('Hospital Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.get('/bloodbanks', (req, res) => {
    bloodBankCollection.find({  })
        .then((data) => {
            console.log('Hospital Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.get('/donors', (req, res) => {
    donorCollection.find({  })
        .then((data) => {
            console.log('Hospital Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

// Post function for registering donors
router.post('/register', (req, res) => {
    const data = req.body;

    const newBlogPost = new donorCollection(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved'
        });
    });
});

module.exports=router;