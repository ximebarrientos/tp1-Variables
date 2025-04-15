//Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y determinar si es par o impar. Mostrar el resultado.

const num1 = parseInt(prompt("Ingrese un numero"))

if ((num1%2)==0){
    document.writeln("Es un número par")
}else if ((num1%2)==1){
    document.writeln("Es un número impar")
}else if(isNaN(num1)){
    document.writeln("No ingreso un valor numerico")
}
