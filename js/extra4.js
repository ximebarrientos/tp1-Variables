//Calcular el precio con descuento: Crear un algoritmo que permita ingresar el precio de un producto y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.

const precio=prompt("Ingrese el precio del producto")

if (precio>1000){
    precioConDescuento=precio*0.85
    document.writeln("El precio con descuento es: $" + precioConDescuento)
}else{
    document.writeln("El precio es: $"+ precio)
}