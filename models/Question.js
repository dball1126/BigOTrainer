const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    options: {
        type: Schema.Types.ObjectId,
        ref: 'Option'
    }
})

module.exports = Question = mongoose.model('questions', QuestionSchema);