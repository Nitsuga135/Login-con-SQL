//requiero expres y guardo el metodo Router()
const express = require ('express');
const { home } = require('../controllers/homeController');
const router = express.Router();

//requiero controlador
const homeController = require ("../controllers/homeController")

//llamo al metodo del controller
router.get("/", homeController.home);
    

module.exports = router;