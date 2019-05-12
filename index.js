const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(methodOverride('method'))
app.use(express.urlencoded({ extended: true }))

app.use('/book', require('./routers/bookRouter'))
app.use('/category', require('./routers/categoryRouter'))

app.listen(3000, function() {
  console.log('Server listening')
})
