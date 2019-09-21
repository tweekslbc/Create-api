const conn = require('./conn');
const { UUID, UUIDV4, STRING } = conn.Sequelize;

const Category = conn.define('category', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: STRING
});

module.exports = Product;