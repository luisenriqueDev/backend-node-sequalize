const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

});

Usuario.prototype.toJSON =  function () {
    var {password, createdAt, updatedAt, id, ...usuario} = Object.assign({}, this.get());
    
    // delete values.id;
    // delete values.password;
    // delete values.createdAt;
    // delete values.updatedAt;
    usuario.uid = id;
    return usuario;
  }

module.exports = {
    Usuario
}