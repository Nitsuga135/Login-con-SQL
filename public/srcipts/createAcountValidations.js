document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('load', () => {
    let error={
        todoOkUsuario: "No",
        todoOkContrasena: "No",
        todoOkNombre: "No",
        todoOkApellido: "No",
        todoOkTelefono: "No",
        todoOkdireccion: "No",
        todoOkEmail: "No",
        todoOkAvatar: "No",
        todoOkPais: "No",
        todoOkGenero: "No"
    };
    

    let nombre_usuario = document.querySelector(".nombreUsuario") ;
    let errores_usuario = document.getElementById("nombre-usuario") ;
    let error_back_usuario = document.querySelector(".error-back-nombre-usu");
    
    let contrasena = document.querySelector(".contrasena");
    let contrasena_errores = document.getElementById("contrasena");
    let error_back_contrasena = document.querySelector(".error-back-contrasena");

    let nombre = document.querySelector(".nombre");
    let errores_nombre = document.getElementById("nombre");
    let error_back_nombre = document.querySelector(".error-back-nombre")
    
    let apellido = document.querySelector(".apellido")
    let errores_apellido = document.getElementById("apellido");
    let error_back_apellido = document.querySelector(".error-back-apellido");
    
    let telefono = document.querySelector(".telefono")
    let telefono_errores = document.getElementById("telefono")
    let error_back_telefono = document.querySelector(".error-back-telefono");
    
    let direccion = document.querySelector(".direccion");
    let errores_direccion = document.getElementById("direccion");
    let error_back_direccion = document.querySelector(".error-back-direccion")
    
    let email = document.querySelector(".email");
    let errores_email = document.getElementById("email");
    let error_back_email = document.querySelector(".error-back-email");
    
    let avatar = document.querySelector(".avatar");
    let errores_avatar = document.getElementById("avatar");
    let error_back_avatar = document.querySelector("error-back-avatar");
    
    let pais = document.querySelector(".pais");
    let errores_pais = document.getElementById("pais");
    let error_back_pais = document.querySelector(".error-back-pais");
    
    let genero = document.querySelector(".pais");
    let errores_genero = document.getElementById("pais");
    let error_back_genero = document.querySelector(".error-back-pais");
    

    const button = document.querySelector(".button-submit")
    const formulario = document.getElementById('form-create-user');
    
    if(nombre_usuario.value.length > 0){
        error.todoOkUsuario = "Ok"
    } if(contrasena.value.length > 0){
        error.todoOkContrasena = "Ok"
    } if(nombre.value.length > 0){
        error.todoOkNombre = "Ok"
    } if(apellido.value.length > 0){
        error.todoOkApellido = "Ok"
    } if(telefono.value.length > 0){
        error.todoOkTelefono = "Ok"
    } if(direccion.value.length > 0){
        error.todoOkdireccion = "Ok"
    } if(email.value.length > 0){
        error.todoOkEmail = "Ok"
    } if(avatar.value.length > 0){
        error.todoOkAvatar = "Ok"
    } if(pais.value.length > 0){
        error.todoOkPais = "Ok"
    }

    nombre_usuario.addEventListener("keyup", (e)=>{
        
        if(error_back_usuario != null){

                    error_back_usuario.style.display = "none"
        
        }  
        if(nombre_usuario.value === "undefined" 
            || nombre_usuario.value === ""
            || nombre_usuario.value === null){
                console.log(error_back_usuario)
                  
                error.usuario = "Este campo no debe estar vacio";
                nombre_usuario.classList.add("text-danger");
                errores_usuario.style.display = "block"
                errores_usuario.textContent = error.usuario;
            }else if(nombre_usuario.value.length <= 4 ){
                error.usuario = "El nombre de usuario debe tener más de 4 caracteres";
                nombre_usuario.classList.add("text-danger");
                errores_usuario.style.display  = "block";
                errores_usuario.textContent = error.usuario;


            }else{
                if(error_back_usuario != null){
                    
                    error_back_usuario.style.display  = "none"  
                }
                delete error.usuario;
                nombre_usuario.classList.remove("text-danger");
                errores_usuario.style.display = "none";
                error.todoOkUsuario = "Si"


            }

    })


//variables de contraseña
//const numeros = ["1","2","3", "4", "5", "6", "7", "8", "9", "0"]
let contrasenasProhibidas = ["nombre","Nombre","contraseña", nombre_usuario.value, "Contraseña","password", "Password"]
let numeros="0123456789";

function tiene_numeros(texto){
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return false;
      }
   }
   return true;
}
contrasena.addEventListener("keyup",()=>{
    
    if(error_back_contrasena != null){
                error_back_contrasena.style.display = "none";
    }

    if( contrasena.value === "" 
        || contrasena.value === null 
        || contrasena.value === "undefined"){
        
            error.contrasena = "Este campo no debe estar vacio";
            contrasena.classList.add("text-danger");
            contrasena_errores.style.display = "block";
            contrasena_errores.textContent = error.contrasena;
    }else if(contrasena.value.length < 4){

        error.contrasena = "La contrasena debe tener más de 4 digitos";
        contrasena.classList.add("text-danger");
        contrasena_errores.style.display = "block";
        contrasena_errores.textContent = error.contrasena;

    }else if(contrasenasProhibidas.includes(contrasena.value)){
        error.contrasena = "Contraseña muy sensilla";
        contrasena.classList.add("text-danger");
        contrasena_errores.style.display = "block";
        contrasena_errores.textContent = error.contrasena;
    } 
    else if(tiene_numeros(contrasena.value)){

            error.contrasena = "La contraseña debe incluir un numero";
            contrasena.classList.add("text-danger");
            contrasena_errores.style.display = "block";
            contrasena_errores.textContent = error.contrasena;

    }else{
            if(error_back_contrasena != null){
                        
                error_back_contrasena.style.display  = "none"  
            }
            delete error.contrasena;
            contrasena.classList.remove("text-danger");
            contrasena_errores.style.display = "none";
            error.todoOkContrasena = "Si"

    }
    })

    
    nombre.addEventListener("keyup", ()=>{
        
        if(error_back_nombre != null){
                error_back_nombre.style.display = "none";
        }

        if( nombre.value === "" 
        || nombre.value === null 
        || nombre.value === "undefined"){

            
            error.nombre = "Este campo no puede estar vacio";
            nombre.classList.add("text-danger");
            errores_nombre.style.display =  "block";
            errores_nombre.textContent = error.nombre;
        }else{
           
            delete error.nombre;
            nombre.classList.remove("text-danger");
            errores_nombre.style.display = "none"
            error.todoOkNombre = "Si"
        }
        
    })
     

    apellido.addEventListener("keyup", function(){
        
        if(error_back_apellido != null){

            error_back_apellido.style.display = "none";

        }
        if(apellido.value === null ||
            apellido.value === "undefined" ||
            apellido.value === ""){
            
            error.apellido = "Este campo no puede estar vacio";
            apellido.classList.add("text-danger");
            errores_apellido.style.display =  "block";
            errores_apellido.textContent = error.apellido;    
        }else if(apellido.value.length < 2){
            
            error.apellido = "Este campo debe tener mas de dos caracteres";
            apellido.classList.add("text-danger");
            errores_apellido.style.display =  "block";
            errores_apellido.textContent = error.apellido;  
        }
        else{
            delete error.apellido;
            apellido.classList.remove("text-danger");
            errores_apellido.style.display = "none";
            error.todoOkApellido = "Si"
        }


    })
    telefono.addEventListener("keyup", function(){

        if(error_back_telefono != null){

            error_back_telefono.style.display = "none";

        }   
        if(telefono.value === ""
            || telefono.value === "undefined"
            || telefono.value === null){
            
            error.telefono = "Este campo no debe estar vacio";
            telefono.classList.add("text-danger");
            telefono_errores.style.display =  "block";
            telefono_errores.textContent = error.telefono; 
        }else if(telefono.value.length >= 11 || telefono.value.length <= 9){
            
            error.telefono = "Este campo debe contener 10 caracteres";
            telefono.classList.add("text-danger");
            telefono_errores.style.display =  "block";
            telefono_errores.textContent = error.telefono; 
        }else{
            delete error.telefono;
            telefono.classList.remove("text-danger");
            telefono_errores.style.display = "none";
            error.todoOkTelefono = "Si"
        }

    })

    direccion.addEventListener("keyup", function(){

    if(error_back_direccion != null){

        error_back_direccion.style.display = "none";

    }  
    if(direccion.value === ""
        || direccion.value === "undefined"
        || direccion.value === null){
            
            error.direccion = "Este campo no debe estar vacio";
            direccion.classList.add("text-danger");
            errores_direccion.style.display =  "block";
            errores_direccion.textContent = error.direccion; 
    }else{
        
            delete error.direccion;
            direccion.classList.remove("text-danger");
            errores_direccion.style.display = "none";
            error.todoOkdireccion = "Si"
         
    }
   
    })
   

    email.addEventListener("keyup", function(){
        
    if(error_back_email != null){

        error_back_email.style.display = "none";

    }  
    if(email.value === ""
        || email.value === "undefined"
        || email.value === null){
            
            error.email = "Este campo no debe estar vacio";
            email.classList.add("text-danger");
            errores_email.style.display =  "block";
            errores_email.textContent = error.email; 
    }else if(!email.value.includes("@")){

        error.email = "Debe ingresar un mail valido";
        email.classList.add("text-danger");
        errores_email.style.display =  "block";
        errores_email.textContent = error.email; 
    }else if(email.value.length < 5){

        error.email = "Debe ingresar un mail valido";
        email.classList.add("text-danger");
        errores_email.style.display =  "block";
        errores_email.textContent = error.email; 
    }else{

        delete error.email;
        email.classList.remove("text-danger");
        errores_email.style.display = "none";
        error.todoOkEmail = "Si"
      
    }
    })
    avatar.value = ''

    let validIMGType = [
        "image/png", 
        "image/PNG", 
        "image/jpg", 
        "image/JPG", 
        "image/jpeg", 
        "image/JPEG", 
        "image/gif", 
        "image/GIF"
    ]
    avatar.addEventListener("blur", ()=>{
        
         
        error_back_avatar != null
                ? (error_back_avatar.style.display = 'none')
                : null;

                if (
                    avatar.files.length > 0
                ) {
                    let validExtension = [
                        '.jpg',
                        '.png',
                        '.PNG',
                        '.JPG',
                        '.jpeg',
                        '.JPEG',
                        '.gif',
                        '.GIF'
                    ];
    
                    let invalidType = true;
                    
                    
                        if (!validIMGType.includes(avatar.files[0].type)) {
                            error.avatar = `Las extensiones tienen que ser ${validExtension.join(', ')}`;
                            errores_avatar.style.display = 'block';
                            avatar.classList.add("text-danger");
                            errores_avatar.textContent = error.avatar;
                        }else if(avatar.value === ""
                            || avatar.value === "undefined"
                            || avatar.value === null){
                                
                                error.avatar = "Este campo no debe estar vacio";
                                avatar.classList.add("text-danger");
                                errores_avatar.style.display =  "block";
                                errores_avatar.textContent = error.avatar; 
                        }else {
                            invalidType = false;
                            delete error.avatar;
                            error.todoOkAvatar = 'Ok';
                            avatar.classList.remove("text-danger");
                            errores_avatar.style.display = 'none';
                            error.todoOkAvatar = "Si"
                        }
                    
                   
                }
             
        
    })
   
    
    pais.addEventListener("blur", () =>{
        if(error_back_pais != null){

            error_back_pais.style.display = "none";
    
        }  
        if(pais.value === ""
            || pais.value === "undefined"
            || pais.value === null){
                
                error.pais = "Este campo no debe estar vacio";
                pais.classList.add("text-danger");
                errores_pais.style.display =  "block";
                errores_pais.textContent = error.pais; 
        }else{

            delete error.pais;
            pais.classList.remove("text-danger");
            errores_pais.style.display = "none";
            error.todoOkPais = "Si"
        }
    })
    genero.addEventListener("blur", () =>{
        if(error_back_genero != null){

            error_back_genero.style.display = "none";
    
        }  
        if(genero.value === ""
            || genero.value === "undefined"
            || genero.value === null){
                
                error.genero = "Este campo no debe estar vacio";
                genero.classList.add("text-danger");
                errores_genero.style.display =  "block";
                errores_genero.textContent = error.genero; 
        }else{

            delete error.genero;
            genero.classList.remove("text-danger");
            errores_genero.style.display = "none";
            error.todoOkGenero = "Si"
        }
    })
    button.addEventListener('click', (e) => {
        
        if(error.todoOkUsuario == "No"||
        error.todoOkContrasena == "No"||
        error.todoOkNombre == "No"||
        error.todoOkApellido == "No"||
        error.todoOkTelefono == "No"||
        error.todoOkdireccion == "No"||
        error.todoOkEmail == "No"||
        error.todoOkAvatar == "No" ||
        error.todoOkPais == "No" ||
        error.todoOkGenero == "No"){


            e.preventDefault();
            

        }else if(error.usuario ||
                error.contrasena ||
                error.nombre ||
                error.apellido ||
                error.telefono ||
                error.direccion ||
                error.email ||
                error.avatar ||
                error.genero ||
                error.pais){
        
        
            e.preventDefault();
        }
         else {
			formulario.submit();
		}
    })
})
 })