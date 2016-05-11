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

// controller.index = function(req, res, next) {
//   res.json('HOLLA HOLLA', { title: 'WELCOME BABY' });
// };

// controller.create = function(req, res) {

//  var todo = new Todo({
//    title: req.body.title,
//    priority: req.body.priority,
//    difficulty: req.body.difficulty,
//    isComplete: req.body.isComplete,
//    createdAt: req.body.createdAt,
//    updatedAt: req.body.updatedAt,
//    completedOn: req.body.completedOn,
//  });

//  todo.save(function(err) {
//     if (err) throw err;
//     res.redirect('/');
//   });

// };

// controller.destroy = function(req, res){
//  var id = req.params.id;
//  console.log(req.body, req.params);
//  Todo.findOneAndRemove({_id: id}, function(err, doc, result){
//    if (err){
//      console.log(err);
//    }
//    console.log(err, doc, result);
//    res.json({status: "deleted"});
//  });
// };


// controller.update = function(req, res) {
//  var id = req.params.id;
//  var itemTitle = req.body.itemTitle;
//  var serialNumber = req.body.serialNumber;
//  var description = req.body.description;

//  Todo.findOneAndUpdate(
//    {_id: id},
//    { itemTitle: itemTitle,
//      serialNumber: serialNumber,
//      description: description,
//    },
//    function(err, todo) {
//    if (err) {
//      throw err;
//    }
//      res.redirect('/index');
//  });
// };


module.exports = controller;
