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

module.exports = Option = mongoose.model('options', OptionSchema);