const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Quiz = require('../../models/Quiz');
const validateQuizInput = require('../../validation/quizzes')
const ObjectId = require('mongodb').ObjectID;
router.get('/', (req, res) => {
    
    Quiz.find()
        .sort({ date: -1 })
        .then(quizzes => res.json(quizzes))
        .catch(err => res.status(400).json({ noQuizzesFound: 'No quizzes found'}))
});

router.get('/user/:user_id', (req, res) => {
    
    Quiz.find({user: req.params.user_id})
        .then(quizzes => res.json(quizzes))
        .catch(err => res.status(404).json({ noQuizFound: 'No Quizzes found from that user'}))
})

router.get('/:id', (req, res) => {
    // let id = req.params.quizid.toString();
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    console.log("XXXXXXXXXXXXXXXXXXXXXXX")
    // console.log(req.params)
    console.log("DDDDDDDDDDDDDDDD")
    
    Quiz.find({_id: ObjectId(req.params.id)})
    .then(quiz => console.log(quiz))
    // console.log(Quiz.find({ _id: ObjectId(req.params.id) }))    

        .catch(err => res.status(404)).json({ noQuizFound: 'No Quiz found with that id'})
});

router.post('/homepage', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        const { errors, isValid} = validateQuizInput(req.body);
        
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newQuiz = new Quiz({
            name: req.body.name,
            level: req.body.level
        });
        newQuiz.save().then(quiz => res.json(quiz));
     });
module.exports = router;