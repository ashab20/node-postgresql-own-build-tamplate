import  asyncMiddleware  from '../middlewares/asyncMiddleware.js';
import ErrorHandler from '../helpers/ErrorHander.js';
import {get,show,create,update,deleteData} from '../model/CommonModel.js';

// get all users
export const indexTodo = asyncMiddleware(async(req,res,next) => {
    const data = await get("todos");
    if(!data) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json({data});
});


// get one users
export const showTodo = asyncMiddleware(async(req,res,next) => {
    const {id} = req.params;
    const data = await show("todos",id);
    if(!data) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json({data});
});


// create todo
export const createTodo = asyncMiddleware(async(req,res,next) => {
    // const data = {

    // }
    const response = await create("todos",req.body);
    if(!response) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json(response);
});

export const updateTodo = asyncMiddleware(async(req,res,next) => {
    const {id} = req.params;
    const response = await update("todos",req.body,id);
    if(!response) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json(response);
});

// delete
export const deleteTodo = asyncMiddleware(async(req,res,next) => {
    const {id} = req.params;
    await deleteData("todos",id);
    res.status(200).json("data deleted successfully");
    
});



