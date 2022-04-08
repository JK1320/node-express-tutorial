const mongoose = require('mongoose'); // import mongoose

const TaskSchema = new mongoose.Schema({
    // add validation to schema to check both properties with values are included
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  }, // specified two properties for database schema
});

module.exports = mongoose.model('Task', TaskSchema);