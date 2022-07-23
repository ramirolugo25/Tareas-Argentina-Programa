function probarDevolverMayorEdad(){
    
    console.assert(devolverMayorEdad([14,1,30,23,1]) === 30,
    'devolverMayorEdad falló, no devuelve la mayor edad');
}

function probarDevolverMenorEdad(){
    console.assert(devolverMenorEdad([14,1,30,23,2]) === 1,
    'devolverMenorEdad falló, no devuelve la menor edad');
}

function probarDevolverPromedioEdad(){
    console.assert(devolverPromedioEdad([14,1,30,23,2]) === 14, 
    'devolverPromedioEdad falló, no devuelve el promedio de edad');
}

probarDevolverMayorEdad();
probarDevolverMenorEdad();
probarDevolverPromedioEdad();
