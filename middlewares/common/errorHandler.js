const createError = require('http-errors');

// 404 not found handlers
function notFoundHandler(req, res, next){
    next(createError(404,"Your requested url is not found"));
}

//default error handler 
function errorHandler(err, req,res, next){
    res.locals.error =
        process.env.NODE_ENV==="development" ? err : {message:err.message};
    res.status(err.status || 500);
    res.locals.error.status = err.status || 500
    if (res.locals.html) {
        res.render("error",{
            //html response 
            title:"Error page"
        })
    } else {
        //json response
        res.json(res.locals.error);
        
    }
}

module.exports ={
    notFoundHandler,
    errorHandler
}