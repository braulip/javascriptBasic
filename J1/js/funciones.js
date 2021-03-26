//Declaracion de la funcion

function sumar() {
    console.log(10 * 10)
}

sumar() //Asi se llama a la funcion
        //en esta sintaxis se puede llamar primero la funcion 
        //en js, primero se registran las funciones y luego se ejecutan
//Expresion de la funcion

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2(); //esta sintaxis como comienza con una variable, no se puede llamar primero y luego ejecutarla

//IIFE: se usa para que las variables no se puedan usar en otro archivo

(function() {
    console.log('Esto es una función');
})();
 

//DIFERENCIA ENTRE MÉTODOS Y FUNCIONES: la función va entre parentesis y los métodos va el nombreDeVariable.nombreDeMétodo


const numero1 = 20;
const numero2 = '20';

//ParseInt: convertir string a número (es una función)

console.log(parseInt(numero2));

//ToString: convertir un número a string (es un método)

console.log(toString.numero1);


//ESTRUCTURA DE LAS FUNCIONES


function sumar (numero1, numero2) { //numero1 y numero2 son parametros
    console.log(numero1 + numero2);
}

sumar(20, 10); //argumentos de la función

sumar(15, 32); //se puede reutilizar la misma función con varios argumentos

//parametros por default: en caso de que la funcion no tenga los argumentos completos se agrega por default

function sumar (n1 = 0, n2 = 0) { 
    console.log(n1 + n2);
}

sumar(20);


//FUNCIONES QUE RETORNAN VALORES

function sumar3 (n1, n2) { 
    return(n1 + n2);
}

const resultado = sumar(2, 3); //la funcion se asigna a una variable 
console.log(resultado);

let total = 0;

function agregarCarrito (precio) {
    return total += precio;
}

function calcularImpuesto (total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(700);

console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: ${totalPagar}`);


//MÉTODOS DE PROPIEDAD


const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },
    pausar : function () {
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(356);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Metal');


//ARROW FUNCTIONS


//Forma tradicional
const sumar4 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar4(5, 10);

//Escrita con arrow function 

const sumar5 = (n1, n2) => console.log(n1 + n2); //Si es una sola linea la funcion no se colocan las llaves
sumar5(5, 10);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo('Javascript');

//Si lleva un return tambien se elimina

