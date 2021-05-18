/*
 * Title: Markdown Blog
 *  Description: Simple Markdown blog app using express , mongodb and so on...
 *  Author: Mohammad Mesbaul Haque
 * Date: 18/05/2021
 */

// Dependencies.
const express = require('express');
const articleRouter = require('./routes/articles')



// Module scaffolding.
const app = express();

app.set('view engine', 'ejs');
// main functions or objects.
app.get('/', (req, res)=>{
    res.render('index')
})


// give permission to use modules
app.use('/articles', articleRouter);


app.listen(3000, ()=>{
    console.log(`listening Markdown app`);
})
// export the module.