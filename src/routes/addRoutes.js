const express = require('express');
const addRouter = express.Router();
function add(nav1){
    addRouter.get('/',(req,res)=>{
        res.render("addBooks",   
        {nav1,
        title:'Library'
    });
    });
    return addRouter;
}

module.exports = add; 