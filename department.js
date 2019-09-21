const conn = require('./conn');
const { UUID, UUIDV4, STRING } = conn.Sequelize;

const Department = conn.define('department', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: STRING
});

module.exports = Department;
