const mongoose = require('mongoose'); // import mongoose

const TaskSchema = new mongoose.Schema({
name:String,completed:Boolean              // specified two properties for database schema
});


module.exports = mongoose.model('Task', TaskSchema);