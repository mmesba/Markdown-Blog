/*
 * Title: Article Schema.
 * Description: Article schema for Markdown blog app.
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 19/05/2021
 */
// Dependencies.
const mongoose = require('mongoose');





// Main functions.
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})






// export the module.
module.exports = mongoose.model('Article', articleSchema);
