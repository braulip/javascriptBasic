const puntaje = 100;

if (puntaje == 1000) {
    console.log ('El puntaje es 1000');
} else {
    console.log('No es igual a 1000');
}


const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}


const rol = 'Administrador';

if(rol === 'Administrador'){
    console.log('Puedes acceder');
} else if (rol === 'Editor'){
    console.log('Tienes acceso limitado');
} else {
    console.log('No tienes acceso');
}


//SWITCH: cuando existen demasiados else if, se escribe con otra nomenclatura mas sencilla

const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('Pagaste con tefectivo');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;    
    default: 
        console.log('Aun no pagaste');
        break;
}
