const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const path = require('path');

const errorController = require("./controllers/error.js");

// const routes = require('./routes');
const app = express();

// const expressHbs = require('express-handlebars');

// app.engine(`hbs`, expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));

app.set('view engine', 'ejs');
app.set('views', 'views');

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

app.use('/', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

// const server = http.createServer(app);
//
// server.listen(3000);
