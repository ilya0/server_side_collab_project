var Todo = require('../models/todo_model.js');
var controller = {};


controller.index = function(req, res) {
 Todo.find({}, function(err, todo) {
   if (err) {
     throw err;
   }
   res.json(todo);
 });
};

controller.create = function(req, res) {

 var todo = new Todo({
   title: req.body.title,
   priority: req.body.priority,
   difficulty: req.body.difficulty,
   isComplete: req.body.isComplete,
   createdAt: req.body.createdAt,
   updatedAt: req.body.updatedAt,
   completedOn: req.body.completedOn,
 });

 todo.save(function(err) {
    if (err) throw err;
    res.json(todo)
  });

};

controller.show = function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if (err) {
      throw err;
    } else {
      res.json(todo);
    }
  });
};


controller.update = function(req, res) {

  Todo.findOneAndUpdate({_id: req.params.id},

  {title: req.body.title,
   priority: req.body.priority,
   difficulty: req.body.difficulty,
   isComplete: req.body.isComplete,
   createdAt: req.body.createdAt,
   updatedAt: req.body.updatedAt,
   completedOn: req.body.completedOn},


    function(err, todo) {
    if (err) {
      throw err;
    }
      res.json('/');
  });

};

controller.destroy = function(req, res){
 console.log(req.body, req.params);
 Todo.findOneAndRemove({_id: req.params.id}, function(err, doc, result){
   if (err){
     console.log(err);
   }
   console.log(err, doc, result);
   res.json({status: "deleted"});
 });
};


module.exports = controller;
