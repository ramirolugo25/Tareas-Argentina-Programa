//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.




const $botonCargar = document.querySelector('#boton-cargar');



$botonCargar.onclick = function(){
    let horasTotal = 0;
    let minutosTotal = 0;
    let segundosTotal = 0;
    for(let i=1; i<=5; i++){
        let horas = Number(document.querySelector(`#clase-${i} .horas`).value);
        let minutos = Number(document.querySelector(`#clase-${i} .minutos`).value);
        let segundos = Number(document.querySelector(`#clase-${i} .segundos`).value);

        horasTotal += horas;
        minutosTotal += minutos;
        segundosTotal += segundos;

        if (minutosTotal >= 60){
            horasTotal += Math.trunc(minutosTotal/60);
            minutosTotal = minutosTotal - (Math.trunc(minutosTotal/60) * 60);
        }
        if (segundosTotal >=60){
            minutosTotal += Math.trunc(segundosTotal/60);
            segundosTotal = segundosTotal - (Math.trunc(segundosTotal/60) * 60);
        }

        const respuesta = `${horasTotal} horas, ${minutosTotal} minutos, ${segundosTotal} segundos.`;
        document.querySelector('#repuesta').innerText = respuesta;

    }
    return false;
}