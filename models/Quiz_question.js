const mongoose = require('mongooese');
const Schema = mongoose.Schema;

QuizQuestionSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})