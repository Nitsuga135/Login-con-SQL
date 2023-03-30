//requiero express y router
const express = require ('express');
const router = express.Router();

//llamo controler login
const loginController = require('../controllers/loginController.js');

//requiero el middelware de si esta alguien en session para que no pueda entrar a login
const guestMiddelware = require("../middelwares/route/guestMiddelware");

//llamo al middelware para verificar session tenga a un usuario
const authMiddelware = require("../middelwares/route/authMiddelware")

//requiero express validator
const {body} = require("express-validator");
const { throws } = require("assert");

//validaciones express validator
const validations=[
    
    body("email").notEmpty().withMessage("Este campo no puede estar vaio").bail()
    .isEmail().withMessage("Debe ingresar un mail valido"),
    body("contrasena").notEmpty().withMessage("Este campo no puede estar vacio")

]

//llamo al metodo del controller
//renderizar página
router.get("/", guestMiddelware, loginController.index);

//logOut
router.get("/logOut", authMiddelware, loginController.logOut);

//inicio de session
router.post("/", validations, loginController.loginProcess)

module.exports = router;