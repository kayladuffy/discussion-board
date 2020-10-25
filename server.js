const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/discuss', {
useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'test description'
    },
    {
        title: 'Test Article',
        createdAt: new Date(),
        description: 'test description 2'
    }]
    res.render('articles/index', { articles : articles })
})

app.listen(5000)