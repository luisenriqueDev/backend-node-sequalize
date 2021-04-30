const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares');
const { login, googleSignin, renewToken } = require('../controllers/auth');

const router = Router();

router.post('/login', 
    [
        check('email', 'El correo es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],
    login 
);

router.post('/google', 
    [
        check('id_token', 'El id_token es necesario').not().isEmpty(),
        validarCampos
    ],
    googleSignin 
);

//Ruta para renovar el JWT
router.get('/renew', validarJWT, renewToken);


module.exports = router;