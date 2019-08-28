const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    }
})


const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    good_score: {
        type: Number,
        default: 0
    },
    bad_score: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    quizzes: [QuizSchema]
})

module.exports = User = mongoose.model('users', UserSchema);