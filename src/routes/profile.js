//requiero expres y guardo el metodo Router()
const express = require ('express');
const router = express.Router();

//llamo al middelware para verificar session tenga a un usuario
const authMiddelware = require("../middelwares/route/authMiddelware")

const myProfileMiddleware = require("../middelwares/route/myProfileMiddelware");
//requiero controlador
const profileController = require ("../controllers/profileController")

//llamo al metodo del controller
router.get("/:id", authMiddelware, myProfileMiddleware, profileController.index);
    

module.exports = router;