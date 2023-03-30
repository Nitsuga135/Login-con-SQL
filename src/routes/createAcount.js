const express = require("express");
const router = express.Router();
//llamo path
const path= require("path");

//requiero el middelware de si esta alguien en session para que no pueda entrar a crear cuenta
const guestMiddelware = require("../middelwares/route/guestMiddelware")

//requiero controlador
const createAcountController = require ("../controllers/createAcountController")

//requiero multer para recibir archivos 

const multer = require("multer");

//requiero expres- validator 
const {body} = require("express-validator");
const { throws } = require("assert");

//seteo el lugar donde se van a guardar los archivos
const storage = multer.diskStorage({

    destination:(req, res, cb) => {
        cb(null, "./public/images/avatars" )
    },
    filename: (req, file , cb) => {
        
        let fileName ='imgAvatar-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }

    })

    const uploadFile = multer({storage});

    //validaciones de validator-express
    //nombreUsuario contrasena password nombre apellido telefono direccion email avatar pais
    const validations=[
        body("nombre").notEmpty().withMessage("Este campo no debe estar vacio"),
        body("apellido").notEmpty().withMessage("Este campo no debe estar vacio"),
        body("email").notEmpty().withMessage("Este campo no debe estar vacio").bail()
        .isEmail().withMessage("Debes ingresar un mail valido"),
        body("nombreUsuario").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("contrasena").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("telefono").notEmpty().withMessage("Este campo no puede estar vacio").bail()
        .isNumeric().withMessage("Ingresar un numero de teléfono valido"),
        body("direccion").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("pais").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("genero").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("avatar").custom((value, {req}) =>{
            
            //requiero el archivo que ingresa el usuario
            let file = req.file
            //seteo las posibles extensiones que tiene el programa
            let acceptedExtensions = [".png",".jpg",".gif"]
            

            if(!file){
                throw new Error ("Este campo no puede estar vacio");
            }else{
                
                //saco la extension del archivo que sube la persona si es que vino el archivo
                let extension = path.extname(file.originalname);
                //en caso de haber ingresado un archivo que no este en las extensiones permitidas envia este error
                if(!acceptedExtensions.includes(extension)){
                
                    throw new Error ("Las extensiones permitidas son: " + acceptedExtensions.join(", ") )
                }
            }

            

            return true;
        })

    ]
       

//llamo al metodo del controller
router.get("/", guestMiddelware, createAcountController.index);
//crear Cuenta
router.post("/",  uploadFile.single("avatar"), validations, createAcountController.register)

module.exports = router;