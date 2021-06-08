/*
 * Title: Markdown Blog
 *  Description: Simple Markdown blog app using express , mongodb and so on...
 *  Author: Mohammad Mesbaul Haque
 * Date: 18/05/2021
 */

// Dependencies.
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Article = require('./models/Article')
const articleRouter = require('./controllers/articles');

//connect with mongodb
mongoose.connect('mongodb+srv://Mesbaul:YauYRJiEbqi2w65u@cluster0.g2wug.mongodb.net/Blog?retryWrites=true&w=majority', {useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true})

.then(()=>console.log(`connected with atlas`))
.catch(err=>console.log(err))

// Module scaffolding.
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
// main functions or objects.
app.get('/', async(req, res)=>{
    const articles = await Article.find().sort({createdAt: 'desc'});
    res.render('articles/index', {articles: articles})
})


// give permission to use modules
app.use('/articles', articleRouter);


app.listen(3000, ()=>{
    console.log(`listening Markdown app`);
})
// export the module.