const path = require('path');
const fs  = require('fs');

const { response } = require("express");
const { subirArchivo } = require('../helpers');
const { Usuario } = require('../models/usuario');

const cargarArchivo = async ( req, res = response ) => {

    try {
        
        //Imagenes
        const nombre = await subirArchivo(req.files, undefined , 'imgs' );
    
        res.json({nombre});

    } catch (msg) {
        res.status(400).json({ msg }); 
        
    }

  
} 

const actualizarImagen = async (req, res = response) => {

    const { id, tabla } = req.params;

    let modelo;

    switch (tabla) {
        case 'usuarios':

        modelo = await Usuario.findByPk(id);

        if(!modelo){
            return res.status(400).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
            
            break;
    
        default:
            return res.status(500).json({ msg: 'Se me olvidó validar esto' });
    }

    //Limpiar imagenes previas
    if(modelo.img){
        //Hay que borrar la imagen del servidor
        const pathImagen = path.join( __dirname, '../uploads', tabla, modelo.img );
        if( fs.existsSync( pathImagen ) ){
            fs.unlinkSync( pathImagen );

        }
    }

    const nombre = await subirArchivo(req.files, undefined , tabla );

    modelo.img = nombre;

    await modelo.save();

    res.json( modelo );


}


const mostrarImagen = async (req, res = response) => {

    const { id, tabla } = req.params;

    let modelo;

    switch (tabla) {
        case 'usuarios':

        modelo = await Usuario.findByPk(id);

        if(!modelo){
            return res.status(400).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
            
            break;
    
        default:
            return res.status(500).json({ msg: 'Se me olvidó validar esto' });
    }

    //Limpiar imagenes previas
    if(modelo.img){
        //Hay que mostrar la imagen
        const pathImagen = path.join( __dirname, '../uploads', tabla, modelo.img );
        if( fs.existsSync( pathImagen ) ){
            return res.sendFile(pathImagen);

        }
    }

    const pathImagen = path.join( __dirname, '../assets/no-image.jpg' );
    return res.sendFile(pathImagen);

   

}

module.exports = {
    cargarArchivo,
    actualizarImagen,
    mostrarImagen
}