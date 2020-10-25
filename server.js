const express = require('express')
const categoriesRouter = require('./routes/categories')
const app = express()

app.set('view engine', 'ejs')

app.use('/categories', categoriesRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(5000)