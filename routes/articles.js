/*
 * Title: articles module for app.
 * Description: articles module for app.
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 18/05/2021
 */
// Dependencies.
const express = require('express');
const Article = require('../models/Article');

// Module scaffolding.
const router = express.Router();


// Main functions.
router.get('/new', (req, res)=>{
    res.render('articles/new', {article: new Article()});
})

router.get('/:id', async (req, res)=>{
    const article = await Article.findById(req.params.id)
    if(article === null) res.redirect('/')
    res.render('articles/show', {article: article})
})

router.post('/',async (req, res)=>{
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
      article =   await article.save();
      //if successfully save article , redirect
      res.redirect(`/articles/${article.id}`)
      // it will redirect to the show page where the newly saved data will be arrived

    } catch (err) {
        res.render('articles/new', {article: article})
    }
})



// export the module.
module.exports = router;