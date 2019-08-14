const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    
})