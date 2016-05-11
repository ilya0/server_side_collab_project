var express = require('express');
var router = express.Router();

var todosController = require('../controllers/todos_controller.js');
console.log(todosController);

router.route('/')
 .get(todosController.index);
//  .post(todosController.create);

// router.route('/:id')
//  .delete(todosController.destroy)
//  // .get(todosController.show)
//  .patch(todosController.update);

// router.route('/:id')
//  .delete(todosController.destroy)
//  // .get(todosController.show)
//  .patch(todosController.update);

// router.route('/checkInCheckOut/:id')
//  .post(todosController.checkOutCheckIn);

// router.route('/:id/edit')
//  .get(todosController.edit);

// router.route('/new')
//  .get(todosController.new);


module.exports = router;
