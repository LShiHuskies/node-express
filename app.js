const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

// const routes = require('./routes');
const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));

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
  res.status(404).send('<h1>Page not found<h1>');
});


app.listen(3000);

// const server = http.createServer(app);
//
// server.listen(3000);
