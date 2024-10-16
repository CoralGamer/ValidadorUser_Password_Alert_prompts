function ingresar(){
    a = Number (prompt("ingresa el numero: "))
    return a
}
var n1 = ingresar()
var n2 = ingresar()
var resultado = n1+n2
//alert("Tu resultado es: "+resultado);
if (resultado<0){
    alert("Tu numero es mayor");
}
