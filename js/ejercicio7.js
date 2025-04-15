const num1= parseInt(prompt('Ingrese un número'))
const num2= parseInt(prompt("Ingrese un segundo número"))
const num3= parseInt(prompt("Ingrese un tercer número"))

if (num1<num2 && num3<num2){
    document.writeln("El "+num2+" es el número mas grande")
}else if (num1>num2 && num1>num3){
    document.writeln("El "+num1+" es el número mas grande")
}else if (num1<num3 && num2<num3){
    document.writeln("El "+num3+" es el número mas grande")
} else {
    document.writeln("No se puede determinar cual es mayor porque 2 o 3 numeros son iguales")
}