//every products related functions

const productType = {
    version: 'digital',
    tax: 0.1,
}

async function getfullname(codeid, productName){
    console.log("product:" + codeid + '---' + productName);
    await doBreakLine();
}

//hidden function
async function doBreakLine(){
    console.log('\n');
}

async function getproductlable(productName){
    console.log("product:" + productName);
    await doBreakLine();
}

module.exports = {
    getfullname,
    getproductlable,
    productType,
}