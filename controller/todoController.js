const asyncMiddleware = require('../middlewares/asyncMiddleware');
const ErrorHandler = require('../helpers/ErrorHander');
const {get,show,create,update,deleteData} = require('../model/CommonModel');

// get all users
exports.indexTodo = asyncMiddleware(async(req,res,next) => {
    const data = await get("todos");
    if(!data) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json({data});
});


// get one users
exports.showTodo = asyncMiddleware(async(req,res,next) => {
    const {id} = req.params;
    const data = await show("todos",id);
    if(!data) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json({data});
});


// create todo
exports.createTodo = asyncMiddleware(async(req,res,next) => {
    // const data = {

    // }
    const response = await create("todos",req.body);
    if(!response) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json(response);
});

exports.updateTodo = asyncMiddleware(async(req,res,next) => {
    const {id} = req.params;
    const response = await update("todos",req.body,id);
    if(!response) return next(new ErrorHandler('No data founds!',404))
    res.status(200).json(response);
});

// delete
exports.deleteTodo = asyncMiddleware(async(req,res,next) => {
    const {id} = req.params;
    await deleteData("todos",id);
    res.status(200).json("data deleted successfully");
    
});



