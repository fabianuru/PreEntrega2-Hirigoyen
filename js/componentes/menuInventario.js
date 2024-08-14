let inventarioItem1 = 0
let inventarioItem2 = 0
let inventarioItem3 = 0


function menuInventario() {

    let opcion =parseInt(prompt("HOLA " + nombre.toUpperCase() + "\n\n----BIENVENIDO AL SISTEMA DE GESTIÓN DE INVENTARIOS---- \n\n 1- GESTIONAR INVENTARIO ITEM#1 \n 2- GESTIONAR INVENTARIO ITEM#2 \n 3- GESTIONAR INVENTARIO ITEM#3 \n 4- Volver al menú principal"));
    
    while(opcion != 4){
        switch (opcion){
            case 1: 
            inventarioItem1=menuInventarioItem("ITEM#1",inventarioItem1);
            break;
            case 2: 
            inventarioItem2=menuInventarioItem("ITEM#2",inventarioItem2);
            break;
            case 3: 
            inventarioItem3=menuInventarioItem("ITEM#3",inventarioItem3);
            break;
            default:
            alert("Debes ingresar una opción válida");
            break;
        }
        opcion =parseInt(prompt("HOLA " + nombre.toUpperCase() + "\n\n----BIENVENIDO AL SISTEMA DE GESTIÓN DE INVENTARIOS---- \n\n 1- GESTIONAR INVENTARIO ITEM#1 \n 2- GESTIONAR INVENTARIO ITEM#2 \n 3- GESTIONAR INVENTARIO ITEM#3 \n 4- Volver al menú principal"));
    }
}

function menuInventarioItem(material,inventarioItem) {

    let opcion = parseInt(prompt("---GESTIÓN DE INVENTARIO DE : " + material +"--- \n\n 1- VER EXISTENCIAS DE  "+ material + " (" + inventarioItem + " unidades) \n 2- AGREGAR NUEVO INVENTARIO \n 3- ELIMINAR INVENTARIO EXISTENTE \n 4- Volver atrás"));
    
    while(opcion !=4){
        switch (opcion){
            case 1: 
                if (inventarioItem>0) {
                    alert("--VER EXISTENCIAS DE : "+ material + "-- \n\n Hay en existencias " + inventarioItem + " unidades disponibles de " + material + " en el inventario");
                } else {
                    alert("--VER EXISTENCIAS DE : "+ material + "-- \n\n No se encontrarón existencias de " + material + " en el inventario");
                }
                break;
            case 2: 
                let agregarInventario = parseInt(prompt("--AGREGAR AL INVENTARIO UNIDADES DE : "+ material + "-- \n\n Ingrese la cantidad de "+ material + " que desea agregar al inventario"));
                while (!agregarInventario || agregarInventario < 0) {
                    alert ( "Debes ingresar una cantidad de "+ material +" válida");
                    agregarInventario = parseInt(prompt("Ingrese una nueva cantidad de "+ material + " que desea agregar al inventario"));
                }
                inventarioItem += agregarInventario;
                alert ("Agregaste : " + agregarInventario + " unidades de " +material + " a tu inventario \n \n INVENTARIO ACTUALIZADO TOTAL: " + inventarioItem + " unidades disponibles");
                break;
            case 3:
                let eliminarInventario = parseInt(prompt("-- ELIMINAR DEL INVENTARIO UNIDADES DE : "+ material + "-- \n\n Ingrese la cantidad de "+ material + " que desea eliminar del inventario"));
                while (!eliminarInventario || eliminarInventario < 0) {
                    alert ("Debes ingresar una cantidad de "+ material+" válida");
                eliminarInventario = parseInt(prompt("Ingrese la cantidad de "+ material +" que desea eliminar del inventario"));
                }
                if (inventarioItem > 0 && (eliminarInventario) <= inventarioItem) {
                    inventarioItem -= (eliminarInventario);
                    alert("Eliminaste : " + eliminarInventario+ " unidades de "+ material + " de tu inventario \n \n INVENTARIO ACTUALIZADO TOTAL: " + inventarioItem + " unidades disponibles")
                } else {
                    alert("No puedes eliminar " + (eliminarInventario) + " "+ material + " ya que no cuentas con inventario disponible \n \n INVENTARIO ACTUAL: " + inventarioItem + " unidades disponibles")
                    alert("Si deseas eliminar unidades de tu inventario, debes ingresar una cantidad válida");
                }
                break;
            default:
                alert("Debes ingresar una opción válida");
            break;
        }
        opcion = parseInt(prompt("---GESTIÓN DE INVENTARIO DE : " + material +"--- \n\n 1- VER EXISTENCIAS DE  "+ material + " (" + inventarioItem + " unidades) \n 2- AGREGAR NUEVO INVENTARIO \n 3- ELIMINAR INVENTARIO EXISTENTE \n 4- Volver atrás"));
    }
    
    return inventarioItem
}

