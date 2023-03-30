//express
const express = require("express");
const app = express();

//ejs 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//requiero express-session
const session = require("express-session"); 

//uso session
app.use(session({
    secret:"Shhh, it's a secret",
    resave: false,
    saveUninitialized: false
}))

//userLoggedMiddelware para verificar si hay alguien en session
const userLoggedMiddelware = require("./middelwares/global/userLoggedMiddelware");

//requiero cookie-parser
const cookies = require("cookie-parser") ;

//uso cookie pareser
app.use(cookies())

//public reducir expreción
app.use(express.static("./public"));

//usar express-validator 
app.use(express.urlencoded({extended: false}))



//lo uso para poder ver si hay alguien en session en toda la apk
app.use(userLoggedMiddelware);

//asignar routes

const home = require("./routes/home");
const createAcount = require("./routes/createAcount");
const login = require("./routes/login");
const profile = require("./routes/profile")
//ir a la ruta
app.use("/", home)
app.use("/createAcount", createAcount)
app.use("/login", login)
app.use("/profile", profile)

app.listen(3000, ()=>{
    console.log("Server 3000 runing")
})
