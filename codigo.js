// Dar la bienvenida al usuario y solicitar su nombre
let nombre = prompt("¡Bienvenido! Por favor, ingrese su nombre:");

// Iniciar el juego relacionado con comidas populares argentinas
let respuesta = prompt("¡Hola, " + nombre + "! Vamos a jugar un juego relacionado con comidas populares argentinas. ¿Cuál es el plato más típico de Argentina?");

// Verificar la respuesta del usuario
if (respuesta.toLowerCase() === "asado") {
    alert("¡Correcto! El asado es una de las comidas más populares en Argentina.");
} else if (respuesta.toLowerCase() === "empanadas") {
    alert("¡Muy bien! Las empanadas son otra opción muy popular en Argentina.");
} else {
    alert("Incorrecto. El plato más típico de Argentina es el asado, pero las empanadas también son muy populares.");
}

// Solicitar la fecha de nacimiento al usuario
let fechaNacimiento = prompt("Ahora, por favor, ingrese su fecha de nacimiento (DD/MM/AAAA):");

// Calcular la edad del usuario a partir de su fecha de nacimiento
let fechaActual = new Date();
let fechaNacimientoArray = fechaNacimiento.split("/");
let diaNacimiento = parseInt(fechaNacimientoArray[0]);
let mesNacimiento = parseInt(fechaNacimientoArray[1]) - 1; // Los meses en JavaScript van de 0 a 11
let anoNacimiento = parseInt(fechaNacimientoArray[2]);
let fechaNacimientoUsuario = new Date(anoNacimiento, mesNacimiento, diaNacimiento);
let edadEnMilisegundos = fechaActual - fechaNacimientoUsuario;
let edadEnAnos = Math.floor(edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25)); // Ajuste para años bisiestos

// Verificar si el usuario es mayor de 18 años
if (edadEnAnos < 18) {
    alert("Lo siento, " + nombre + ", debes ser mayor de 18 años para ingresar al comercio. Por favor, vuelve cuando cumplas la mayoría de edad.");
} else {
    // Mostrar mensaje de crédito a favor
    alert("¡Excelente, " + nombre + "! Por jugar, tienes un crédito a favor de $10000 para cualquier compra.");

    // Solicitar al usuario la cantidad que desea gastar
    let cantidadGastar = parseFloat(prompt("¿Cuánto deseas gastar?"));

    // Calcular saldo disponible después del gasto
    let saldoDisponible = 10000 - cantidadGastar;

    // Mostrar saldo disponible al usuario
    alert("Tu saldo disponible es: $" + saldoDisponible.toFixed(2));
}


//condicional simple

let pais = prompt('Ingresa tu pais');

if(pais == 'argentina'){
    console.log('El usuario es argentino');
}else{
    console.log('El usuario NO es argentino');
}

//operador || OR
let nombreMessi = prompt('Ingrese el nombre y apellido del Mejor jugador del mundo');

if((nombreMessi == 'Lionel Messi')||(nombreMessi == 'lionel messi')||(nombreMessi == 'LIONEL MESSI')){
    alert('Respuesta correcta, obvio que si!');
}else{
    alert('Respuesta incorrecta. Le erraste mal!');
}