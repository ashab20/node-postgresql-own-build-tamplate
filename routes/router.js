const router = require('express').Router();
const {createTodo,indexTodo,deleteTodo , showTodo,updateTodo} = require('../controller/todoController');
// home routes
// router.route('/').get();

// TODO 
router.route('/todos').get(indexTodo).post(createTodo);
router.route('/todos/:id').get(showTodo).put(updateTodo).delete(deleteTodo);


module.exports = router;