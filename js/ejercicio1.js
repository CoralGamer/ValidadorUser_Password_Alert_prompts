var userName = prompt("Registra tu nombre de usuario: ");
var contraseñaPIN = prompt("Registra una contraseña tipo PIN de solo numeros");


if (typeof userName === 'string' && userName.trim() !== '') {
    if (!isNaN(contraseñaPIN) && contraseñaPIN.trim() !== '') {
        contraseñaPIN = Number(contraseñaPIN);
        alert("El nombre de usuario que usted ingresó es el siguiente: " + userName);
        alert("La contraseña que ha ingresado es la siguiente: " + contraseñaPIN + "; podrá cambiarla cuando guste.");
    } else {
        alert("La contraseña ingresada no es válida. Debe ser de solo caracteres numericos.");
    }
} else {
    alert("El nombre de usuario ingresado no es válido. Debe ser un texto no vacío.");
}

console.log(userName+contraseñaPIN)
//ingreso

var ingresoUser = prompt("Ingresa con tu usuario ya registrado:");
var ingresoPass = Number (prompt("Ingresa tu contraseña de usuario"));

if (ingresoUser == userName){
    if (ingresoPass == contraseñaPIN){
        alert("Ha ingresado correctamente");
    }else{
        alert("La contraseña no es correcta");
    }
}else{
    alert("El usuario no existe")
}