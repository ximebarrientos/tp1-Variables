//Calcular el perímetro y área de un rectángulo: 
//Crear un algoritmo que permita al usuario ingresar el largo y el ancho de un rectángulo, y calcular su perímetro y área. 

const largo=Number(prompt("Ingrese el lado del rectangulo (Sólo su valor numérico en cm)"))
const ancho=Number(prompt("Ingrese el ancho del rectangulo (Sólo su valor numérico en cm)"))
const perimetro=2*(largo+ancho)
const area=largo*ancho

document.writeln(`El perímetro del rectángulo es: ${perimetro} cm`)
document.writeln(`<br>El área del rectangulo es: ${area} cm`)