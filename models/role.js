const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Role = db.define('Role', {
  
    rol: {
        type: DataTypes.STRING
    }
   
});

module.exports = {
    Role
}