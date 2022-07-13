
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.querySelector('#boton-agregar');


$botonAgregar.onclick = function(){
    ocultarNodo('#resultados');
    agregarIntegrante();
    const $integrantes = document.querySelectorAll('#integrante');
    if ($integrantes.length === 1){
        mostrarNodo('#boton-calcular');
    }
}

const $botonQuitar = document.querySelector('#boton-quitar');

$botonQuitar.onclick = function(){
    ocultarNodo('#resultados');
    const $integrantes = document.querySelectorAll('#integrante');
    let cantidadIntegrantes = $integrantes.length;

    if ($integrantes.length > 0){
        quitartIntegrante();
        cantidadIntegrantes -= 1;
    }
    
    if (cantidadIntegrantes < 1 ){
        ocultarNodo('#boton-calcular');
    }

}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(){
    $salariosIntegrantes = document.querySelectorAll('#integrante input');
    salarios = [];

    
    for (let i=0; i<$salariosIntegrantes.length; i++){
        if($salariosIntegrantes[i].value !== ''){
            salarios.push(Number($salariosIntegrantes[i].value));
        }
    }

    if(salarios.length > 0){
        mostrarResultados('mayor-salario-anual', devolverMayorSalarioAnual(salarios));
        mostrarResultados('menor-salario-anual', devolverMenorSalarioAnual(salarios));
        mostrarResultados('promedio-salario-anual', devolverPromedioSalarioAnual(salarios));
        mostrarResultados('promedio-salario-mensual', devolverPromedioSalarioMensual(salarios));

        mostrarNodo('#resultados');
    }
    
    
    
    
    
}