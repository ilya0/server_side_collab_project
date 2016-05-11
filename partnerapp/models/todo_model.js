var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  title: String,
  priority: Number,
  difficulty: Number,
  isComplete: Date,
  updatedAt: Date,
  completedOn: Date,
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
