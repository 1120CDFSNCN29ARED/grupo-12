const express = require('express');
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname, "./public")))

app.listen(3001, () => {
    console.log('Server is Live 3001')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register-login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register-login.html'))
})

app.get('/shopping-cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shopping-cart.html'))
})