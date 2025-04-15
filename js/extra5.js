//Convertir grados Fahrenheit a Celsius: Crear un algoritmo que permita al usuario ingresar una 
//temperatura en grados Fahrenheit y convertirla a grados Celsius. La fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)?*(F?32)

const gradosF = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit (Sólo el valor numérico)"))
const gradosC = (5/9)*(gradosF-32)

document.writeln(`La temperatura ${gradosF}°F = ${gradosC}°C`)