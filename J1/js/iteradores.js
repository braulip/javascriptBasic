//FOR LOOP

/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/

/*for (let i = 0; i < 10; i++) {
    if(i % 2 === 0){
        console.log(`El número ${i} es PAR`)
    } else {
        console.log(`El número ${i} es IMPAR`)
    }
}*/

/* const carrito = [
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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}*/


//WHILE LOOP: primero revisa la condición y luego ejecuta el código

/*let i = 0; //indice

while (i < 10) { //condición

    console.log(i);0
    i++; //incremento
}*/

//DO WHILE LOOP: ejecuta el código por lo menos una vez y luego evalua la condición

/*let i = 100; 

do {
    console.log(i);

    i++;
} while (i < 10);*/


//FOREACH: se usa para mostrar los elementos en pantalla o enviarlos a la consola


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



carrito.forEach(function(producto){
    console.log(producto.nombre)
}); 

carrito.forEach(producto => console.log(producto.precio)); //usando arrow function


//MAP: si quieres crear un nuevo arreglo

const arreglo2 = carrito.map(producto => producto.precio);
console.log(arreglo2);

const arreglo3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo3);