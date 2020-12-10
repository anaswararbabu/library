const express = require('express');
const addauthorRouter = express.Router();
function add(nav){
    addauthorRouter.get('/',(req,res)=>{
        res.render("addAuthors",   
        {nav,
        title:'Library'
    });
    });
    return addauthorRouter;
}

module.exports = add; 