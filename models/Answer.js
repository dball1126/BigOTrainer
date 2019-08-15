const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answer: {
        type: String,
        required: true
    },
    letter: {
        type: String,
        required: true
    },
    correct: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Answer = mongoose.model('answers', AnswerSchema);