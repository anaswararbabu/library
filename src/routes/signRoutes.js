const express = require('express');
const signRouter = express.Router();
function sign(nav){
    signRouter.get('/',(req,res)=>{
        res.render("signup",   
        {nav,
        title:'Library'
    });
    });
    signRouter.get('/add',function(req,res){
        res.send("Signup successfully")
    })
    return signRouter;
}

module.exports = sign;