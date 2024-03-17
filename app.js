//Dependencies
const express = require('express');
const dotenv = require('dotenv');
const  mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

//internal imports
const {notFoundHandler,errorHandler} = require('./middlewares/common/errorHandler')
const loginRouter = require('./route/loginRouter');
const usersRouter = require('./route/usersRouter');
const inboxRouter = require('./route/inboxRouter');

//create app object
const app = express()
dotenv.config()

//database connection 
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(()=>console.log('Database connection successful!'))
    .catch(err=>console.log(err));

//Request persers

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Set view engine
app.set('view engine', 'ejs');

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

//Parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//Routing setup 
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);



//404 error handling
app.use(notFoundHandler);

// common Error Handling
app.use(errorHandler)

//Listen to port
app.listen(process.env.PORT,()=>{
    console.log(`App listening to port ${process.env.PORT}`);
})
