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

router.get('/edit/:id', async(req, res)=>{
    let article = await Article.findById(req.params.id);
    res.render('articles/edit', {article: article})

})

router.get('/:slug', async (req, res)=>{
    const article = await Article.findOne({slug: req.params.slug})
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
      res.redirect(`/articles/${article.slug}`)
      // it will redirect to the show page where the newly saved data will be arrived

    } catch (err) {
        // console.error(err.message);
        res.render('articles/new', {article: article})
    }
})

// router.put()

router.delete('/:id', async(req, res)=>{
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
})



// export the module.
module.exports = router;