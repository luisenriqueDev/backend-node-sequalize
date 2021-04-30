const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { db } = require('../database/config');


class Server{
    
    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        
        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
            uploads:    '/api/uploads'
        }

        //Conectar a base de datos
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async dbConnection() {
        try {
             await db.authenticate();
             console.log('Database Online');
            
        } catch (error) {
            console.log(error);
            throw new Error( 'Error a la hora de inicializar la base de datos' );
            
        }
    }
   
    middlewares(){

        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio público
        this.app.use(express.static('public') );

        //Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use( this.paths.uploads, require('../routes/uploads'));
    } 

    listen(){
        this.app.listen(this.port , () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;