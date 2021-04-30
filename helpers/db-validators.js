const { Role } = require('../models/role');
const { Usuario } = require('../models/usuario');



const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({
        where:{
            rol: rol
        }
    })
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async( email = '' ) => {

    const existeEmail = await Usuario.findOne({
        where:{
            email: email
        }
    });

    if(existeEmail){
       throw new Error(`El correo ${ email } ya está registrado`);
    }

}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el id existe
    const existeUsuario = await Usuario.findByPk( id );
    if ( !existeUsuario ) {
        throw new Error(`No existe el usuario con el id ${ id }`);
    }
}


/**
 * Validar tablas(Mysql) - Colecciones (MongoDB) Permitidas
 */
const tablasPermitidas = (tabla = '', tablas = [] ) => {

    const incluida = tablas.includes( tabla );

    if(!incluida){
        throw new Error(`La tabla ${tabla} no es permitida - ${tablas}`);
    }

    return true;

}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    tablasPermitidas
}

