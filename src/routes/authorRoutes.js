const express = require("express");
const authorsRouter = express.Router();

function router(nav3){
    var authors = [
        {
            title:'English Playwright',
            book:'Hamlet',
            author:'William Shakespeare',
            genre:'play',
            img:'wil.jpg'
        },
      
        {
            title:'novelist',
            book:'Anna Karenina ',
            author:'Leo Tolstoy',
            genre:'novel',
            img:'leo.jpg'
        },
        {
            title:'Novelist',
            book:'Pride and Prejudice',
            author:'Jane Austen',
            genre:'novel',
            img:'jane.jpg'
        },
      
        {
            
            author:'Joseph Barbera',
            title:'American Animator',
            book:'Tom and Jerry',
            genre:'Cartoon',
            img:'joseph.jpg'
        },
        {
            
            author:'J. K. Rowling',
            title:'British Author',
            book:'Harry Potter',
            genre:'Fantasy',
            img:'jk.jpg'
        },
        {
            author:'Basheer',
            title:'Indian Author',
            book:'Pathummayude Aadu',
            genre:'Drama',
            img:'vaikom.jpg'
        }
    ];
    
    
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav3,
            title:'Authors',
            authors
    
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('author',
        {
            nav3,
            title:'Author',
            author:authors[id]
    
        })
    })
     return authorsRouter;
}

module.exports = router;