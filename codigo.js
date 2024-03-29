// Dar la bienvenida al usuario y solicitar su nombre
let nombre = prompt("¡Bienvenido! Por favor, ingrese su apodo:");

//Funcion
let mostrarCliente = (nombreCompleto) => {
    let nombreArray = nombreCompleto.split(' ');
    let nombre = nombreArray[0];
    let apellido = nombreArray.slice(1).join(' ');
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
};

// Ejemplo de uso
let nombreCompleto = prompt("¡Bienvenido! Por favor, ingrese su nombre y apellido:");
mostrarCliente(nombreCompleto);

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
let mesNacimiento = parseInt(fechaNacimientoArray[1]) - 1; 
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

//Condicional simple
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

// Ciclo de conteo básico
for (let i = 0; i < 5; i++) {
    console.log("Conteo: " + i);
}

//Usuario y Contraseña
let user,pass;

for(let i=1; i<=3; i++){
    user = prompt('Ingresa tu usuario');
    pass = prompt('Ingresa la contraseña');
    if((user == 'vorticesonico') && (pass == 'rock1234')){
        alert('Hola genio!');
        break;
    }else{
        alert('Usuario y/o contraseña erroneos');
    }
}

// Ciclo condicional 
let numero = parseInt(prompt("Ingresa tu número favorito, ya sea positivo o negativo:"));

if (numero > 0) {
    alert("¡El número ingresado también es mi favorito y el más exclusivo!");
} else if (numero < 0) {
    alert("¡Así que te gustan los números negativos! Evidentemente tienes una personalidad muy elocuente. ¡Felicitaciones!");
} else {
    alert("¡CERO! ¡Eres sorprendente! ¡Felicitaciones!");
}

//Funcion condicional
let funcionCondicional = () => {
    let respuesta = prompt("¿Que estilo de musica prefiers escuchar, rock o electronica?");

    if (respuesta.toLowerCase() === "rock") {
        alert("¡Genial! nos vamos a entender, por eso te doy la bienvenida a VORTICESONICO OFICIAL. Yo también prefiero el rock.");
    } else if (respuesta.toLowerCase() === "electronica") {
        alert("¡Interesante! La electronica también es una excelente opción.");
    } else {
        alert("No entiendo tu elección. Por favor, elige entre rock y electronica.");
    }
};
// Ejemplo de uso
funcionCondicional();
