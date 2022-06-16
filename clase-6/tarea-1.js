/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonAceptar = document.querySelector('#aceptar');

$botonAceptar.onclick = function(event){
    
    ocultarNodo('#analisis');
    removerIntegrantes();
    const cantidadPersonas = Number(document.querySelector('#cantidad-personas').value);
    if (cantidadPersonas>0){
        crearIntegrantes(cantidadPersonas);
        mostrarNodo('#calcular');
        mostrarNodo('#empezar-de-nuevo');
    }
    else{
        ocultarNodo('#calcular');
        ocultarNodo('#empezar-de-nuevo');
    }
    event.preventDefault();
}

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(event){
    
    const edadIntegrantes = devolverEdadIntegrantes(); 

    mostrarAnalisisEdad('mayor', devolverMayorEdad(edadIntegrantes));
    mostrarAnalisisEdad('menor', devolverMenorEdad(edadIntegrantes));
    mostrarAnalisisEdad('promedio', devolverPromedioEdad(edadIntegrantes));
    mostrarNodo('#analisis');

    event.preventDefault();
}

const $botonEmpezarDeNuevo = document.querySelector('#empezar-de-nuevo');

$botonEmpezarDeNuevo.onclick = function(event){
    removerIntegrantes();
    ocultarNodo('#calcular');
    ocultarNodo('#empezar-de-nuevo');
    ocultarNodo('#analisis');

    event.preventDefault();

}