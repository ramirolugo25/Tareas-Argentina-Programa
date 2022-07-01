function crearIntegrantes(cantidadPersonas){
    $integrantes = document.querySelector('#integrantes');
    
    for(let i=1; i<=cantidadPersonas; i++){

        $div = document.createElement('div');
        $div.className = 'integrante';
        $label = document.createElement('label');
        $input = document.createElement('input');
        $input.type = 'number';
        $label.innerText = `Edad del integrante ${i}`;
        $div.appendChild($label);
        $div.appendChild($input);
        $integrantes.appendChild($div);
    }
    

}

function removerIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante');

    for(let i=0; i<$integrantes.length;i++){
        $integrantes[i].remove();
    }
}


function devolverEdadIntegrantes(){
    
    const edadIntegrantes = [];
    const $edadIntegrantes = document.querySelectorAll('#integrantes input');
    for(let i=0; i<$edadIntegrantes.length; i++){
        edadIntegrantes.push(Number($edadIntegrantes[i].value));
    }
    return edadIntegrantes;
}


function devolverMayorEdad(edadIntegrantes){
    return (Math.max(...edadIntegrantes));
}

function devolverMenorEdad(edadIntegrantes){
    return (Math.min(...edadIntegrantes));
}

function devolverPromedioEdad(edadIntegrantes){
    let suma = 0;

    for (let i=0; i<edadIntegrantes.length; i++){
        suma += edadIntegrantes[i];
    }

    return (suma / edadIntegrantes.length);
}

function mostrarResultadosEdad(identificador,edad){
    document.querySelector(`#${identificador}-edad`).value = edad;
}


function mostrarNodo(nodo){
    document.querySelector(`${nodo}`).className = '';
}

function ocultarNodo(nodo){
    document.querySelector(`${nodo}`).className = 'oculto';
}