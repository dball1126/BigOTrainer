const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    letter: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    quiz_question_id: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    answer: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    options: [OptionSchema]
})

const QuizSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    questions: [QuestionSchema]
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema);