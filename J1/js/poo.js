//Object Literal

const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

//Prototype: nos permite crear funciones que solo se puede usar en un objeto en específico

Producto.prototype.formatearProducto = function (){
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
}

const producto1 = new Producto('Monitor curvo', 1500, true);
const producto2 = new Producto('Laptop', 2300, false);
const producto3 = new Producto('Teclado', 200, true);

console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());





