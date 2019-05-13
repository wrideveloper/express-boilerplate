const express = require('express')
const app = express()

app.use(express.json())
app.use('/book', require('./routers/bookRouter'))
app.use('/category', require('./routers/categoryRouter'))

app.listen(3000, function() {
  console.log('Server listening')
})
