class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }

    disponibilidad(){
        return `El producto está disponible: ${this.stock}`;
    }
}

const producto1 = new Producto('Monitor curvo', 1500, true);
const producto2 = new Producto('Laptop', 2300, false);
const producto3 = new Producto('Teclado', 200, true);

console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

console.log(producto1.disponibilidad());
console.log(producto2.disponibilidad());
console.log(producto3.disponibilidad());



//herencia: evita duplicar codigo, toma el constructor y los metodos de la clase anterior


class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro ('Javascript la revolución', 120, '15458485188');
console.log(libro.formatearProducto());