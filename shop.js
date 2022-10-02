//shoppingCart//
function shoppingCart(){
    alert("Bienvenido a la pagina de compra online del Estudio Fotografico PMU")

    let lista = ""
    let finalizar_carrito = false

    while (!finalizar_carrito){

        let cod = prompt("Ingrese codigo de producto");
        let producto = obtenerProducto(cod);

        if (producto){

            console.log("producto agregado con exito :"+producto);
            lista += "\n"+producto;


        }else{

            if (cod === null){

                finalizar_carrito = true ;


            }else {


                alert("Ingrese un codigo de producto valido");
            
            }

        }

    }

    if (lista != ""){

        let resp = confirm ("Desea concretar la compra de :"+lista);
        if (resp){

            alert("Gracias por comprar en nuestra tienda online");


        }


    }
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