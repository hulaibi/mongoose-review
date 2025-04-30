const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task
