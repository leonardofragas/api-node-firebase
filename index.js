var express = require('express')
var app = express()

const { users } = require('./handlers/users')
const { courses } = require('./handlers/courses')

const PORT = process.env.PORT || 5050

app.get('/users', users)
app.get('/courses', courses)

app.get('/', (req, res) => {
    res.send('This is my demo project')
})

app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`)
})