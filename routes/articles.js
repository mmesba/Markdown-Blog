/*
 * Title: articles module for app.
 * Description: articles module for app.
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 18/05/2021
 */
// Dependencies.
const express = require('express');

// Module scaffolding.
const router = express.Router();


// Main functions.
router.get('/', (req, res)=>{
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






// export the module.
module.exports = router;