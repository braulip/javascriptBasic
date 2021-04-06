/*const usuarioAutenticado = new Promise ((resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario autenticado'); //El promise se cumple
    } else {
        reject('No se pudo inciar sesión'); //El promise no se cumple
    }
});

//En los promises existen 3 valores: 

//Pending: no se ha cumplido pero tampoco se ha rechazado
//Fulfilled: ya se cumplio
//Reject: se ha rechazado o no se pudo cumnplir


//Para poder mostrar los resultados del promise:

usuarioAutenticado 
    .then(function(resultado){      //Si el resultado es true
        console.log(resultado)
    })
    .catch(function(error){         //Si el resultadp es false
        console.log(error)
    })

*/

//ASYNC / AWAIT


/*setTimeout (function(){         //ejecuta la función luego de que transcurre el tiempo establecido
    console.log('set timeout')  //setInterval ejecuta la misma funcion cada vez que transcurre el tiempo establecido
}, 1000);    */                   //esta expresado en ms

/*function descargarNuevosClientes(){
    return new Promise ( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch(error){
        console.log(error);
    }
}

app();*/

//Otro ejemplo ASYNC AWAIT

function descargarNuevosClientes(){
    return new Promise ( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise ( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

async function app() {
    try {
        /*const clientes = await descargarNuevosClientes();
        const pedidos = await descargarUltimosPedidos();
        console.log(clientes);
        console.log(pedidos);*/ //De esta forma se descarga una primero y la otra luego

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); //Se ejecutan las dos al mismo tiempo
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch(error){
        console.log(error);
    }
}

app();

