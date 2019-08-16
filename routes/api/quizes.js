const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Quiz = require('../../models/Quiz');
const validateQuizInput = require('../../validation/quizes')

router.get('/', (req, res) => {
    Quiz.find()
        .sort({ date: -1 })
        .then(quizes => res.json(quizes))
        .catch(err => res.status(400).json({ noQuizesFound: 'No quizes found'}))
});

router.get('/user/:user_id', (req, res) => {
    Quiz.find({user: req.params.user_id})
        .then(quizes => res.json(quizes))
        .catch(err => res.status(404).json({ noQuizFound: 'No Quizes found from taht user'}))
})

router.get('/:id', (req, res) => {
    Quiz.findById(req.params.id)
        .then(quiz => res.json(quiz))
        .catch(err => res.status(404)).json({ noQuizFound: 'No Quiz found with that id'})
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid} = validateQuizInput(req.body);
        
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newQuiz = new Quiz({
            name: req.body.name,
            level: req.body.level
        })
        newQuiz.save().then(quiz => res.json(quiz));
    })
module.exports = router;