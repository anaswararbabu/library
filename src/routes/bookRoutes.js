const express = require("express");
const booksRouter = express.Router();


function router(nav1){
       
    var books = [
        {
            title:'Hamlet',
            author:'William Shakespeare',
            genre:'play',
            img:'ham.jpg'
        },
      
        {
            title:'Anna Karenina ',
            author:'Leo Tolstoy',
            genre:'novel',
            img:'anna.jpg'
        },
        {
            title:'Pride and Prejudice',
            author:'Jane Austen',
            genre:'novel',
            img:'pr.jpg'
        },
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'tom.jpg'
        },
        {
            title:'Harry Potter',
            author:'J. K. Rowling',
            genre:'Fantasy',
            img:'harry.jpg'
        },
        {
            title:'Pathummayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:'basheer.jpg'
        }
    ];
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav1,
            title:'Books',
            books
    
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',
        {
            nav1,
            title:'Library',
            book:books[id]
    
        })
    })
    
return booksRouter;
}

module.exports = router;