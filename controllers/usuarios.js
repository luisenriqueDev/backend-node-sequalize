const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const { Usuario } = require('../models/usuario');


const usuariosGet = async (req = request, res = response) => {
    
    const { limite = 100, desde = 0 } = req.query;

    //Query
    const usuarios = await Usuario.findAll(
        { 
            where:{
                estado: true
            },
            limit: Number(limite), offset: Number(desde) 
        });
    
    //Total de registros en la base de datos
    const total = await usuarios.length;

    res.json({
        total,
        usuarios
    })
}

const usuariosPost = async (req, res) => {

    const { nombre, email, password, rol } = req.body;
    const usuario = new Usuario({ nombre, email, password, rol });
    
    try {

        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt );

        //Guardar usuario en la base de datos
        await usuario.save();
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
        
    }

}

const usuariosPut = async (req, res) => {

    const id = req.params.id;
    const { password, google, correo, ...resto} = req.body;

    const usuario = await Usuario.findByPk( id );

    //TODO validar contra base de datos

    try {

        if( password ){

            //Encriptar la contraseña
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync( password, salt );

        }

        //Actualizar usuario en la base de datos
        await usuario.update(resto);
        res.json(usuario);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
        
    }
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch api'
    })
}

const usuariosDelete = async (req, res) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
   
    //Borrar fisicamente
    // await usuario.destroy();

    //Borrar logicamente
    await usuario.update({estado: false});

    res.json({
        usuario
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}