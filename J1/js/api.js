/*function obtenerEmpleado() {
    
    const archivo = 'empleados.json';
    fetch(archivo)
        .then (resultado => resultado.json())
        .then (datos => {const {empleados} = datos 
            empleados.forEach( empleado => {
                console.log(empleado);
                console.log(empleado.nombre);
            });
        });

}

obtenerEmpleado();*/


//Con Async/Await

async function obtenerEmpleado() {
 
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleado();