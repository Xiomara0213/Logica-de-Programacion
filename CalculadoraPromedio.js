//Desarrolla un programa que calcule el promedio de tres notas ingresadas por el usuario, solicitando también el nombre del alumno y la materia. Además, el programa debe verificar si las notas ingresadas se encuentran dentro del rango válido (por ejemplo, de 0 a 10). Una vez calculado el promedio de las tres notas, el programa debe evaluar si dicho promedio es mayor o igual a 7. Si el promedio es mayor o igual a 7, el programa imprimirá: 'Nombre del alumno, ¡felicidades! Has aprobado con un promedio de [indicar promedio].' En caso de que el promedio sea menor a 7, el programa imprimirá: 'Nombre del alumno, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es [indicar promedio].'

let nombrealumno = prompt("Ingrese el nombre del alumno:");
let materia = prompt("Ingrese el monbre de la materia:");
let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));

let promedio;

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    alert("Por favor ingrese notas válidas en el rango de 0 a 10");
} else {
    promedio = (nota1+nota2+nota3)/3;
}
if (promedio >= 7) {
    alert(`${nombrealumno}, ¡Felicidades! Has aprobado con un promedio de ${promedio.toFixed(1)}.`);
} 
else {
    alert(`${nombrealumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(1)}.`);
}