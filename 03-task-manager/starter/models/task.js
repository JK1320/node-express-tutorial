const mongoose = require('mongoose'); // import mongoose

const TaskSchema = new mongoose.Schema({
name:String,completed:Boolean
});


module.exports = mongoose.model('Task', TaskSchema);