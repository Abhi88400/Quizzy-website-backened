import *as mongoose from 'mongoose';
var quizSchema = new mongoose.Schema({
    quizname: {
        type: String,
        required: true
    },
    quizdescription: {
        type: String,
        required: true
    },
    upload:{
        type: Boolean, default: false
    },
    owner: {
        type: String,
    },
    owneremail: {
        type: String,
    }
})
module.exports = mongoose.model('quiz',quizSchema)