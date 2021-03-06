// const products = [];
const Product = require('../models/product');




exports.getAddProduct = (req, res, next) => {
    
    res.render('add-product', {pageTitle: 'Add Product', path: '/add-product', formCSSS: true, 
    productCSS: true, activeAddProduct: true });
};

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // console.log(adminData.products);
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // const products = adminData.products;
    // console.log(products)
//    const products = Product.fetchAll(cb);
   Product.fetchAll(products => {
    res.render('shop', {prods: products, 
        pageTitle: 'My Shop', 
        path: "/" , 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
   });
  };

