const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: String,
    finished: {type:Boolean, default:false}
}, { timestamps: false });

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;