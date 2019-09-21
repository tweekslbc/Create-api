const conn = require('./conn');
const Product = require('./Product');
const Category = require('./Category');

const mapAndCreate = (items, model)=> {
    return Promise.all(items.map ( item => model.create(item)));
    
}

const syncAndSeed = async()=> {
    await conn.sync({ force: true });
    const categories =[
        { name: 'FOO' },
        { name: 'BAR' },
        { name: 'BAZZ' },
        { name: 'QUQ' }
];
const [ FOO, BAR, BAZZ, QUQ ] = await mapAndCreate(categories, Category);
    
    const products = [
        { name: 'foo', categoryId: FOO.id },
        { name: 'foo2', categoryId: FOO.id },
        { name: 'bar', categoryId: BAR.id},
        { name: 'bazz', categoryId: BAZZ.id }
];
 
 
const [ foo1, foo2, bar, bazz ] = await mapAndCreate(products, Product);

return {
    products: {
        foo1,
        foo2,
        bar,
        bazz
    },
    categories: {
        FOO,
        BAR,
        BAZZ,
        QUQ
    }
};

await mapAndCreate(products, Product);

};

module.exports = {
    syncAndSeed,
    Categories,
    Products,
};