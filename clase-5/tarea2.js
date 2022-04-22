//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



const $botonIngreso = document.querySelector('#ingresar');

$botonIngreso.onclick = function(){
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    let respuesta = '';
    if (edadUsuario>=18){
        respuesta = 'Bienvenido, ' + nombreUsuario + '!';
        document.querySelector('h1').innerText = respuesta;
        let datosUsuario = ` Sus datos son:
                              Nombre: ${nombreUsuario}
                              Apellido: ${apellidoUsuario}
                              Edad: ${edadUsuario}`;
        document.querySelector('#datos-usuario').innerText = datosUsuario;

    }
    else{
        respuesta = 'No puede entrar tienes que ser mayor de 18 años';
        alert(respuesta);
    }

    return false;
}
