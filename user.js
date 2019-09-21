const conn = require('./conn');
const { UUID, UUID4, STRING } = conn.Sequelize;

const User = conn.define('user', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: STRING

});

module.exports = User;
