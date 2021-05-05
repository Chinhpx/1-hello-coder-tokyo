const express = require('express')
var userRoute = require('./routes/user.route')
var cookieParser = require('cookie-parser')
var authRoute = require('./routes/auth.route')
const port = 3000

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', (req, res) => {
  res.render('index', {
  	name: 'Pham Chinh',
  	id: 'CB190194'
  })
})

app.use('/auth', authRoute)
app.use('/users', userRoute)

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})