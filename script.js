
const user="usuario1"
const password="pass123"

function userLogin(){

    let loginAttempts=1
    let loginAttemptsLeft=3

    do{
        let inputUser = prompt ("Ingrese su nombre de usuario:")
        let inputPassword = prompt ("Ingrese su password:")

        if(validateLogin(inputUser,inputPassword)){
            shoppingCart()
        }
        else if(loginAttempts <= 3){
            if((loginAttemptsLeft-1)==1){
                let 
            }
            alert("Los datos ingresados son incorrectos, revise usuario y contraseña e ingreselos nuevamente."+"\n"+"Recuerde que luego de 3 intentos su usuario sera bloqueado por su seguridad."+"\n"+"Le quedan "+parseInt(loginAttemptsLeft=loginAttemptsLeft-1)+" intentos")
            
            loginAttempts=loginAttempts+1
        }
        else{alert("Alcanzo el numero maximo de intentos su usuario ha sigo bloqueado, por favor contactse con nuestro centro de ayuda")
            break
        }
    }        
    while(loginAttempts <= 3)
}

//support - user_login//
function validateLogin(inputUser,inputPassword){
    if(inputUser === user && inputPassword === password){
        return true
    }
    else{
        return false
    }
}

//shoppingCart//
function shoppingCart(){
    alert("este es el shoppring cart")
}

//support - shoppingCart//
function getServiceDescription(serviceCode){

        let service;
        switch(serviceCode){
            case "1":
                service = "Eventos"
                break
            case "2": 
                service = "Estudio"
                break
            case "3":
                service = "Corporativo"
                break
            case "4": 
                service = "Viajes"
                break   
            case "5": 
                service = "Cursos"
                break
            default:
                service = false         
        }
        return service
}

// acciona los prompts
document.addEventListener('DOMContentLoaded', function() {
    userLogin()
})