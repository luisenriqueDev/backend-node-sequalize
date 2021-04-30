const { Sequelize } = require('sequelize');

const db = new Sequelize('food_delivery', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});


module.exports = {
    db
}
