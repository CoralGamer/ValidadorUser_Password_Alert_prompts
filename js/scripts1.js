var miNombre = prompt("Por favor ingrese su nombre ") // Var, son variables globales que las puedo usar en todo lado.
//let edad = 20 // Let son variables locales que solo se pueden usar donde las declaro
var añoActual = 2024
var añoNacimiento = Number (prompt("Por favor ingresa tu año de nacimiento "))
const vivo = true // Constantes nunca se pueden cambiar siempre es el mismo valor
var edadActual = añoActual-añoNacimiento
alert("Este es tu nombre: "+ miNombre);
alert("tu edad es "+ edadActual);
alert(añoActual>añoNacimiento);
console.log(typeof(miNombre))

function ingresar(){
    
}