//VARIABLES


var producto = 'Audifonos'; //Iniciar variable y asignarle valor

var disponible; //Iniciamos la variable sin valor

//El ; es opcional 

producto = true; //Reasignando el valor de la variable

var producto1 = 'Computadora', //Se usa así para declarar varias variables sin repetir "var"
    disponible1 = true,
    categoria = 'computadoras'; //Aqui si es obligatorio poner el ;

//Estilos para variables

var nombre_producto = "Monitor HD"; //Underscore
var nombreProducto = "Monitor HD"; //Camelcase
var NombreProducto = "Monitor HD"; //Pascal Case
var nombreproducto = "Monitor HD"; //Lower case


//VARIABLES CON LET


//Tiene propiedades similares con "var"

let producto2 = 'Audifonos'; 

let disponible2;

//VARIABLES CON CONST

//Deben iniciar con un valor y no se puede reasignar

const producto3 = "Teclado";


//TIPOS DE DATOS 


//String

const producto4 = "Monitor de 20 pulgadas";
const producto5 = String('Monitor de 30 pulgadas');
const producto6 = new String('Monitor de 40 pulgadas');

//const producto4 = "Monitor de 20 pulgadas\""; (Se coloca \ para escribir en el texto la ").

//typeof: indica el tipo de variable.

console.log(producto4);
console.log(typeof producto4);

//metodos de los string

const producto7 = 'Aprendiendo Javascript con el curso de Desarrollo Web';
const producto8 = 'Monitor HD';

//lenght: indica la cantidad de caracteres que tiene el string.

console.log(producto7.length);

//indexOf: indica la posición en que se encuentra un valor solicitado (si el valor es negativo es decir que no lo encuentra). 

console.log(producto7.indexOf('Javascript'));
console.log(producto8.indexOf('Tablet'));

//includes: si encuentra el valor devuelve "true" o "false".

console.log(producto7.includes('Javascript'));
console.log(producto8.includes('Tablet'));

//Number

//en la consola se muestran de color azul oscuro.

const numero1 = 100;
const numero2 = 200;

console.log(numero1);
console.log(numero2);

//operaciones
console.log(numero1 - numero2);
console.log(numero1 + numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);

console.log(numero2 % numero1); //Modulo, que es el residuo de la división

//objeto Math

resultado = Math.PI; //Se pueden llamar constantes universales
resultado4 = Math.sqrt(144); //Raiz cuadrada de un número
resultado5 = Math.abs(-200); //Valor absoluto de un número
console.log(resultado);
console.log(resultado4);
console.log(resultado5);

resultado1 = Math.round(2.2); //Redondeo 
resultado2 = Math.ceil(2.2); //Redondeo hacia arriba
resultado3 = Math.floor(2.2); //Redondeo hacia abajo
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

resultado6 = Math.min (2, 4, 1, 8, 9, 1, 10); //Devuelve el valor mínimo
resultado7 = Math.max (2, 4, 1, 8, 9, 1, 10); //Devuelve el valor máximo
console.log(resultado6);
console.log(resultado7);

//orden de las operaciones

let resultados;

resultados = (20 + 30) *2;

console.log(resultados);

//incrementos

let puntaje = 10;

puntaje++; //10
++puntaje; //12

//Concatenación

const nombre = 'Angel';
const email = 'correo@mail.com'

console.log("Nombre cliente: " + nombre + " " + "Mail: " + email);

//template strings - strings literals

console.log(`Nombre cliente: ${nombre} Mail: ${email}`);

//Booleans

const boolean1 = true;
const boolean2 = false;


//OBJETOS

//se van declarando las propiedades con ,

const productos = {                                
    nombreProducto : "Monitor 20 pulgadas", 
    precio : 300,
    disponible : true
}

console.log(productos); //muestra todos los valores

console.log(productos.precio); //muestra el contenido únicamente de la propiedad seleccionada

productos.imagen = 'imagen.jpg'; //agrega nuevas propiedades

delete productos.disponible; //elimina propiedades

//crear una variable a partir de una propiedad de un objeto

//metodo viejo
const precioProducto = productos.precio;

console.log(precioProducto);

//destructuring
const {precio} = productos; 

//para evitar que se modifique el objeto (no se puede agregar ni eliminar)

Object.freeze(productos);

//"use strict"// correr JS en modo estricto

//evita agregar o eliminar propiedades, pero puede modificar las existentes

Object.seal(productos);

//unir objetos

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...productos, ...medidas };

console.log(nuevoProducto);


//ARREGLOS O ARRAYS


const numeros = [10, 20, 30, 40, 50];

console.table(numeros); //muestra los valores en una tabla

const arreglos = ['Febrero', 20, true, 40, 'septiembre'];

console.table(arreglos);

//Acceder a los valores de un arreglo (el index comienza en 0)

console.log(numeros[4]); //Debe mostrar el 50

//Propiedades de los arreglos 

//length

console.log(numeros.length);

//Metodos de los arrays

//agregar elemento 

numeros[5]= 60; //si coloca un index que no se existe, se puede agregar directamente 

numeros.push(70, 80); //push: agrega datos al final del arreglo

numeros.unshift(-10, -20, -30); //unshift: agrega elementos al principio

//eliminar elemento

numeros.pop(); //elimina el último elemento del arreglo

numeros.shift(); //elimina el inicio del arreglo

numeros.splice(2, 1); //elimina (index, cantidad de elementos)

console.table(numeros);

//rest operator o spread operator

const meses = ['enero', 'febrero'];
const nuevoArreglo = [...meses, 'marzo']; //si se quiere colocar el elemento al principio se cambia directamente la posición
console.log(nuevoArreglo);

const meses1 = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 20', precio: 500},
    { nombre: 'MacBook Pro', precio: 2560},
    { nombre: 'Auriculares', precio: 25},
    { nombre: 'Cable USB', precio: 50},
    { nombre: 'Tablet', precio: 415},
    { nombre: 'Monitor 40', precio: 1235},
    { nombre: 'Bocinas', precio: 470},
    { nombre: 'iPad', precio: 950},
    { nombre: 'Celular', precio: 561}
];

//for each: recorrer cada uno 

meses1.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//includes: para verficar si existe (muestra un boolean de respuesta y no funciona con objetos)

const resulte = meses1.includes('Marzo');
console.log(resulte);

//some: para verificar si un elemento existe (ideal para arreglo de objetos)

let respuesta = carrito.some (function(producto) {
    return producto.nombre == 'Celular'
})

console.log(respuesta);

//reduce: se usa para unir u operar con los componentes de un objeto

resulta = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

console.log(resulta)

//filter

resulta = carrito.filter(function(producto){
    return producto.precio > 400
});

resulta = carrito.filter(function(producto){
    return producto.nombre !== 'celular' //muestra todos excepto el que dice 'celular'
});





