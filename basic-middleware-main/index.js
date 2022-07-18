// MIDDLEWARE
// Middleware comes in the middle of request and response cycles of Node.js execution.


const express = require('express');
const app = express();

// Create function checkUrl  
const checkUrl = function (req,res,next)
{
    console.log("current route is", req.originalUrl)
    //calling next function beacuse
    next();

}

// use middleware function
app.use(checkUrl);


app.get('/',function(req,res) { 
    res.send("This is Home Page")
});
app.get('/login',function (req,res) { 
    res.send("This is login Page")
});
app.get('/about', function (req,res) {
    res.send("this is about page")
});
app.listen(5000);