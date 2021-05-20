/*
 * Title: Markdown Blog
 *  Description: Simple Markdown blog app using express , mongodb and so on...
 *  Author: Mohammad Mesbaul Haque
 * Date: 18/05/2021
 */

// Dependencies.
const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');

//connect with mongodb
mongoose.connect('mongodb://localhost/markdown_blog', {useNewUrlParser: true,
useUnifiedTopology: true})

// Module scaffolding.
const app = express();
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
// main functions or objects.
app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'My first blog app'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'My first blog app'
    }]
    res.render('articles/index', {articles: articles})
})


// give permission to use modules
app.use('/articles', articleRouter);


app.listen(3000, ()=>{
    console.log(`listening Markdown app`);
})
// export the module.