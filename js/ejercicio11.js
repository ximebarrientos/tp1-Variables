const numero=parseInt(prompt("Ingrese un numero"))

if(numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0){
    document.writeln("El "+numero+ " es divisible")
    if(numero%2==0){
        document.writeln("por 2. ")}
    if(numero%3==0){
        document.writeln("por 3. ")}
    if(numero%5==0){
        document.writeln("por 5. ")}
    if(numero%7==0){
        document.writeln("por 7. ")} 
}else{
    document.writeln("No es divisible ni en 2, ni en 3, ni en 5, ni en 7")
}