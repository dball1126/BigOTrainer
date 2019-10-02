const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Quiz = require('../../models/Quiz');
const validateQuizInput = require('../../validation/quizzes')
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true })
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
});

router.get('/:id', (req, res) => { 
    Quiz.find({_id: ObjectId(req.params.id)}).then(quiz => res.json(quiz)).catch(err => res.status(400).json({ noQuizzesFound: 'No quizzes found'}))
});
router.post('/:id', passport.authenticate('jwt', { session: false }),
    (req, res) => {

        // const { errors, isValid } = validateQuizInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors)
        // }
       
        const newQuiz = new Quiz({

            name: req.body.quiz.name,
            level: req.body.quiz.level,
            quiz: req.body.quiz._id,
            answerOptions: req.body.answerOptions,
            user: req.body.id,
            score: req.body.score
            
        });  
        newQuiz.save().then(quiz => res.json(quiz));
    
    // User.updateOne({ "_id": ObjectId(req.body.id)}, {$inc:{good_score: 5}}).then(console.log("MAMAMIA"))
    
    // User.update({ email: "russ@gmail.com" }, { "$addToSet": { "users.quizzes": { name: "quiz200" } } })
    // newQuiz.save().then(quiz => res.json(quiz));
    // Quiz.save({_id: ObjectId(req.params.id)}).then(quiz => res.json(quiz)).catch(err => res.status(400).json({ noQuizzesFound: 'No quizzes found'}))
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