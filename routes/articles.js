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
router.get('/new', (req, res)=>{
    res.render('articles/new');
})


router.post('/', (req, res)=>{
    
})



// export the module.
module.exports = router;