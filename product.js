const conn = require('./conn');
const { UUID, UUID4, STRING } = conn.Sequelize;

const Product = conn.define('product', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: STRING
    
});

module.exports = Product;