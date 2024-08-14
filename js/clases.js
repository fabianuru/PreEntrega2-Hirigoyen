class Ingrediente {
    constructor (nombre,cantidad,precio,inventario){
    this.nombre = nombre;
    this.cantidad=cantidad;
    this.precio= precio;
    this.inventario=inventario;
    }
}

class Jugo {
    constructor (nombre,precio,ml,categoria,ingredientes){
    this.nombre = nombre;
    this.precio= precio;
    this.tamaño=ml;
    this.categoria=categoria;
    this.ingredientes=ingredientes
    }
}

class Pedido {
    constructor (producto,cantidad){
    this.producto = producto;
    this.cantidad =cantidad;
    // this.fechaEntrega=fechaEntrega;
    // this.precio=precio;
    // this.envio=envio;
    // this.dirección=dirección;
    // this.metodoPago=metodoPago;
    }
}

class Cliente {
    constructor (nombre,direccion){
    this.nombre = nombre;
    this.direccion = direccion;
    }
}