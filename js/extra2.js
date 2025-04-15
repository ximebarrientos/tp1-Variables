//Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y determine si es mayor de edad (18 años o más).

const edad = parseInt(prompt("Ingrese su edad"))

if(edad>=0 && edad<18){
    document.writeln("Es menor de edad")
}else if (edad>=18){
    document.writeln("Es mayor de edad")
}else if (edad<0){
    document.writeln("Ingreso un valor no valido")
}else if (isNaN(edad)){
    document.writeln("No ingreso un valor numerico")
}