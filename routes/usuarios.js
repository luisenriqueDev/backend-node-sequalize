const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');
const { validarCampos, validarJWT, esAdminRole, tieneRole} = require('../middlewares');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const router = Router();

router.get('/', 
    [
        validarJWT,
        esAdminRole,
        validarCampos 
    ], 
    usuariosGet 
);

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
        check('email', 'El correo no es válido').isEmail(),
        check('email').custom( emailExiste ),
        // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
        check('rol').custom( esRoleValido ), 
        validarCampos
    ], 
    usuariosPost 
);

router.put('/:id', 
    [   
        validarJWT,
        check('id').custom( existeUsuarioPorId ), 
        validarCampos 
    ],
    usuariosPut
 );

router.patch('/', usuariosPatch  );

router.delete('/:id', 
    [
        validarJWT,
        esAdminRole,
        // tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
        check('id').custom( existeUsuarioPorId ), 
        validarCampos 
    ], 
    usuariosDelete
);


module.exports = router;