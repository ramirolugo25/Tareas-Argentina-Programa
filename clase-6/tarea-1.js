/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const cantidadPersonas = prompt('Hola cuánta gente hay en el grupo familiar?');

for (let i=1; i<=cantidadPersonas; i++){

    const nodoLabel = document.createElement('label');
    const textoLabel = document.createTextNode(`Integrante ${i}`);
    nodoLabel.appendChild(textoLabel);
    document.querySelector('#integrantes').appendChild(nodoLabel);

    const nodoInput = document.createElement('input');
    nodoInput.type = 'Number';
    nodoInput.placeholder = 'Edad';
    document.querySelector('#integrantes').appendChild(nodoInput);

    const nodoBr = document.createElement('br');
    document.querySelector('#integrantes').appendChild(nodoBr);
    
}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(){
    const integrantes = document.querySelectorAll('#integrantes input');
    let edadMayor = Number(integrantes[0].value);
    let edadMenor = Number(integrantes[0].value);
    let suma = Number(integrantes[0].value);

    for(let i=1; i<integrantes.length;i++){
        
        if (Number(integrantes[i].value) > edadMayor){
            edadMayor = Number(integrantes[i].value);
        }

        if (Number(integrantes[i].value) < edadMenor){
            edadMenor = Number(integrantes[i].value);
        }
        suma += Number(integrantes[i].value);
    }

    document.querySelector('#mayor-edad').value = edadMayor;
    document.querySelector('#menor-edad').value = edadMenor;
    document.querySelector('#promedio').value = suma / integrantes.length;
}


