const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const nav = [
    {
        link:'/books',name:'Books' 
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name:'Login'
    }
];
const nav1 = [
    {
        link:'/books',name:'Books' 
    },
    {
        link:'/authors',name:'Authors'
    },
     {
         link:'/addbooks',name:'AddBooks'
     },
     {
        link:'/login',name:'Login'
    }
];

const nav3= [
    {
        link:'/books',name:'Books' 
    },
    {
        link:'/authors',name:'Authors'
    },
     {
         link:'/addAuthors',name:'AddAuthors'
     },
     {
        link:'/login',name:'Login'
    }
];

const nav2 = [
    {
        link:'/signup',name:'signup' 
    }
   
];
const booksRouter =  require('./src/routes/bookRoutes')(nav1);
const addRouter =  require('./src/routes/addRoutes')(nav1);
const authorsRouter =  require('./src/routes/authorRoutes')(nav3);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav2);
const signRouter = require('./src/routes/signRoutes')(nav);
app.use('/books',booksRouter);
app.use('/addBooks',addRouter);
app.use('/authors',authorsRouter);
app.use('/addAuthors',addauthorRouter);
app.use('/login',loginRouter);
app.use('/signup',signRouter);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname +'/src/views');
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'

    });
});

app.listen(port,()=>{console.log("Server Ready at " + port)});