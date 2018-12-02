const fs = require('fs');
const path = require('path');

let products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    
    save() {
        // products.push(this);
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 
        'products.json');
        fs.readFile(p, (err, fileContent) => {
            
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 
        'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                // return [];
                cb([]);
            } else { 
                cb(JSON.parse(fileContent));
            }
        });
        // return products;
    }
}