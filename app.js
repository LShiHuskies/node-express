const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const path = require('path');

// const routes = require('./routes');
const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button> </input> </form>')
// });
//
// app.post('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send('<h1>Page not found<h1>');
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});


app.listen(3000);

// const server = http.createServer(app);
//
// server.listen(3000);
