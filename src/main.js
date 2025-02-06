
//const { getfullname, getproductlable } = require("./services/products");
const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

(async function main(){
    console.log('sytem on');
    products.getfullname('000', 'product1');
    products.getproductlable('product2');

    console.log(config.client.device);

    database.conectToDatabase('database1');
    
})();

