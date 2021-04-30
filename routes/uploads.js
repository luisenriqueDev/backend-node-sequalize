const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarArchivoSubir } = require('../middlewares');
const { cargarArchivo, actualizarImagen, mostrarImagen } = require('../controllers/uploads');
const { tablasPermitidas } = require('../helpers');

const router = Router();

router.post('/', validarArchivoSubir, cargarArchivo);

router.put('/:tabla/:id',
    [
        validarArchivoSubir,
        check('tabla').custom( c => tablasPermitidas(c, ['usuarios', 'productos']) ),
        validarCampos

    ], 
    actualizarImagen 
);

router.get('/:tabla/:id',
    [
        check('tabla').custom( c => tablasPermitidas(c, ['usuarios', 'productos']) ),
        validarCampos
    ], 
    mostrarImagen 
);




module.exports = router; 