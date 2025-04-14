const num1= parseInt(prompt('Ingrese un número'))
const num2= parseInt(prompt("Ingrese un segundo número"))

if (num1<num2){
    document.writeln("El "+num2+" es el número mas grande")
}else if (num1>num2){
    document.writeln("El "+num1+" es el número mas grande")
}else if (num1==num2){
    document.writeln("Los numeros son iguales")
}