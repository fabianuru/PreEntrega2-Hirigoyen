function menuPrincipal() {

    let opcion =parseInt(prompt("HOLA " + nombre.toUpperCase() + "\n\n----BIENVENIDO AL SISTEMA DE GESTIÓN DE JUICELAB---- \n\n 1- GESTIONAR PEDIDOS \n 2- GESTIONAR INVENTARIO  \n 3- Salir"));
    
    while(opcion != 3) {
        switch (opcion) {
            case 1: 
            menuPedidos();
            break;
            case 2: 
            menuInventario();
            break;
            default:
            alert("Debes ingresar una opción válida");
            break;
        }
        opcion =parseInt(prompt("HOLA " + nombre.toUpperCase() + "\n\n----BIENVENIDO AL SISTEMA DE GESTIÓN DE JUICELAB---- \n\n 1- GESTIONAR PEDIDOS \n 2- GESTIONAR INVENTARIO \n 3- Salir"));
    }

    if (confirm("¡ATENCIÓN! Si sales perderás toda la información. \n\n ¿Estás seguro que quieres salir?")) {
        alert("¡Gracias "+ nombre + " por usar el sistema de gestión de JUICELAB!");
    } else {
        menuPrincipal();
    }
}