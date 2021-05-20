/*
 * Title: Article Schema.
 * Description: Article schema for Markdown blog app.
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 19/05/2021
 */
// Dependencies.
const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');
const createDomPurifier = require('dompurify');
const { JSDOM } = require('jsdom')



// Main functions.
const dompurify = createDomPurifier(new JSDOM().window);

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
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    }
})

//setup sum pre validation
articleSchema.pre('validate', function (next) {
     if(this.title){
         this.slug = slugify(this.title, {lower: true, strict: true})
     }
     if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
     }
     next();
})





// export the module.
module.exports = mongoose.model('Article', articleSchema);
