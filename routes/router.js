import {Router} from 'express';
import {createTodo,indexTodo,deleteTodo , showTodo,updateTodo} from '../controller/todoController.js';

// home routes
const router = Router();
// router.route('/').get();

// TODO 
router.route('/todos').get(indexTodo).post(createTodo);
router.route('/todos/:id').get(showTodo).put(updateTodo).delete(deleteTodo);


export default router;