const conn = require('./conn');
const Product = require('./Product');

const mapAndCreate = ()=> {
    
}

const syncAndSeed = async()=> {
    const products = [
        { name: 'foo' },
        { name: 'bar' },
        { name: 'bazz' }
];
    
await mapAndCreate(products, Product);

};

module.exports = {
    syncAndSeed
};