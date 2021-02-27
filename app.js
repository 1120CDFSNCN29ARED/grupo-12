const express = require('express');
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname, "./public")))

app.listen(3000, () => {
    console.log('Server is Live 3000')
})

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/home.ejs'))
});

app.get('/product', (req, res) => {
    res.render(path.join(__dirname, '/views/productdetail.ejs'))
});

app.get('/register-login', (req, res) => {
    res.render(path.join(__dirname, '/views/register-login.ejs'))
});

app.get('/shopping-cart', (req, res) => {
    res.render(path.join(__dirname, '/views/shopping-cart.ejs'))
});