//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const $botonCargar = document.querySelector('#boton-cargar');

$botonCargar.onclick = function(){

    /*
    const lista = document.querySelectorAll('li');
    let suma = Number(lista[0].innerText);
    let numeroMenor = Number(lista[0].innerText);
    let numeroMayor = Number(lista[0].innerText);

    for(let i=1; i<lista.length; i++){
        suma = suma + Number(lista[i].innerText);
        
        if(Number(lista[i].innerText) < numeroMenor){
            numeroMenor = Number(lista[i].innerText);
        }
        if(Number(lista[i].innerText) > numeroMayor){
            numeroMayor = Number(lista[i].innerText);
        }
    }

    let promedio = suma / lista.length;

    console.log('promedio: '+ promedio);
    console.log('menor: '+ numeroMenor);
    console.log('mayor: ' + numeroMayor);
    */

    const lista = document.querySelectorAll('li');
    let arreglo = [];
    let suma = 0;

    for(let i=0; i<lista.length;i++){
        arreglo.push(Number(lista[i].innerText));
        suma += Number(lista[i].innerText);
    }
    
    arreglo = ordenarArreglo(arreglo);
    
    let i = 0;
    let numeroFrecuente;
    let contadorMaximo = 0;
    
    while(i<arreglo.length){

        let numero = arreglo[i];
        let contador = 0;

        while (numero === arreglo[i]){
            contador++;
            i++;
        }

        if (contador > contadorMaximo){
            contadorMaximo = contador;
            numeroFrecuente = numero;
        }

    }

    document.querySelector('#promedio').innerText = `El promedio es: ${suma / arreglo.length}`;
    document.querySelector('#numero-pequeño').innerText = `El numero mas pequeño es: ${arreglo[0]}`;
    document.querySelector('#numero-grande').innerText = `El numero mas grande es: ${arreglo[arreglo.length-1]}`;
    document.querySelector('#numero-frecuente').innerText = `El numero mas frecuente es: ${numeroFrecuente}`;
    
    
    return false;

}



function ordenarArreglo(ar){
    
let aux;

for(let i=0; i<ar.length-1; i++){
    
    for(let j=i+1; j<ar.length; j++){

        if(ar[i]>ar[j]){
            aux = ar[j];
            ar[j] = ar[i];
            ar[i] = aux;             
        }

    }
}

return ar;

}

