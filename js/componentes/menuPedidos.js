function menuPedidos(){
    let opcion =parseInt(prompt("HOLA " + nombre.toUpperCase() + "\n\n----GESTIONE SUS PEDIDOS---- \n\n 1- INGRESAR AL SISTEMA PEDIDO NUEVO \n 2- ELIMINAR PEDIDO POR ID  \n 4- Volver al menú principal"));
    while(opcion != 4){
        switch (opcion){
            case 1: 
            agregarPedido();
            break;
            case 2: 
            eliminarPedido();
            break;
            default:
            alert("Debes ingresar una opción válida");
            break;
        }
        opcion =parseInt(prompt("HOLA " + nombre.toUpperCase() + "\n\n----GESTIONE SUS PEDIDOS---- \n\n 1- INGRESAR AL SISTEMA PEDIDO NUEVO \n 2- ELIMINAR PEDIDO POR ID \n 4- Volver al menú principal"));    }
}

function agregarPedido() {
    let pedido = [];
    let cliente =[];
    let fecha = new Date ();
    let id = pedidos.length+1;

    if (confirm("¿Quieres ingresar un pedido nuevo?")){
        let nombre = prompt("PASO 1- INGRESE NOMBRE DEL CLIENTE \n\n NOMBRE:");
        let direccion = prompt("PASO 2- INGRESE DIRECCIÓN DEL CLIENTE \n\n DIRECCIÓN:");
        cliente = new Cliente(nombre, direccion);
    }

    let opcion = parseInt(prompt(("PASO 3- SELECCIONE LOS PRODUCTOS QUE DESEA AGREGAR AL PEDIDO \n\n 1- AGREGAR DRGREEN \n 2-AGREGAR CAROTENO \n3- AGREGAR RED BEAT \n 4-AGREGAR ANANA FIT \n 5-CONFIRMAR PEDIDO")));
    
    while (opcion != 5) {
        let cantidad;
        switch (opcion) {
            case 1: 
                cantidad = parseInt(prompt("Ingrese la cantidad de jugos DrGreen que quiere agregar al pedido"))
                while ((!cantidad || cantidad < 0)) {
                    alert ("Debes ingresar una cantidad válida")
                    cantidad = parseInt(prompt("Ingrese la cantidad de jugos DrGreen que quiere agregar al pedido"))

                }
                for (let i = 0; i <cantidad; i++){
                    pedido.push(drgreen)
                    }
                break;
            case 2: 
                cantidad = parseInt(prompt("Ingrese la cantidad de jugos Caroteno que quiere agregar al pedido"))
                for (let i = 0; i <cantidad; i++){
                    pedido.push(caroteno)
                }
                break;
            case 3: 
                cantidad = parseInt(prompt("Ingrese la cantidad de jugos AnanaFit que quiere agregar al pedido"))
                for (let i = 0; i <cantidad; i++){
                    pedido.push(ananafit)
                }
                break;
            case 4: 
                cantidad = parseInt(prompt("Ingrese la cantidad de jugos RedBeat que quiere agregar al pedido"))
                for (let i = 0; i <cantidad; i++){
                    pedido.push(redbeat)
                }
                break;

            default:
                alert("Debes ingresar una opción válida");
                break;
        }
        opcion = parseInt(prompt(("PASO 3- SELECCIONE LOS PRODUCTOS QUE DESEA AGREGAR AL PEDIDO \n\n 1- AGREGAR DRGREEN \n 2-AGREGAR CAROTENO \n3- AGREGAR RED BEAT \n 4-AGREGAR ANANA FIT \n 5-CONFIRMAR PEDIDO")));    
    }
    if (confirm("¿Estás seguro que quieres confirmar este pedido?")) {
        let nuevoPedido = {
            fecha: fecha,
            id: id,
            cliente: cliente,
            productos: pedido
        };
        pedidos.push(nuevoPedido);
        alert(`Su pedido ha sido confirmado \n ID: ${id}`);
        console.log(pedidos)
    } else {
        alert("Su pedido ha sido cancelado");
    }
}

function eliminarPedido () {
    let pedidoEliminar = parseInt(prompt("Ingrese el ID del pedido que deseas eliminar"));
    pedidos = pedidos.filter((pedido) => pedido.id != pedidoEliminar);
    alert ("El pedido ID : " + pedidoEliminar + " ha sido eliminado");
    console.log(pedidos)
}


