const conn = require('./conn');
const Product = require('./Product');

const mapAndCreate = (items, model)=> {
    return Promise.all(items.map ( item => model.create(item)));
    
}

const syncAndSeed = async()=> {
    await conn.sync({ force: true });
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