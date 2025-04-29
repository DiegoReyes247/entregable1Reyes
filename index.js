// Simulador de inscripción a Light Reaction

// Constantes: planes disponibles
const planes = ["Brazilian Jiujitsu", "MMA", "Full Access"];
const precios = [200, 150, 280]; // precios por mes en USD

// Variables
let nombreUsuario;
let edadUsuario;
let planSeleccionado;

// Array para guardar usuarios registrados
let usuariosRegistrados = [];

// Función para mostrar planes disponibles
function mostrarPlanes() {
    console.log("Planes disponibles:");
    for (let i = 0; i < planes.length; i++) {
        console.log(`${i + 1}. ${planes[i]} - $${precios[i]} USD al mes`);
    }
}

// Función principal de inscripción
function inscribirUsuario() {
    alert("¡Bienvenido a Light Reaction!");

    nombreUsuario = prompt("Ingrese su nombre:");
    edadUsuario = prompt("Ingrese su edad:");
    edadUsuario = parseInt(edadUsuario);

    // Validar edad
    if (edadUsuario < 12) {
        alert("Lo sentimos, debes tener al menos 12 años para inscribirte, próximamente abriremos nuestro BJJ for kids.");
        return; // Salir de la función
    }

    mostrarPlanes();

    let seleccion = prompt("Seleccione un plan escribiendo el número (1 = Brazilian Jiujitsu, 2 = MMA o 3 = Full Access):");
    seleccion = parseInt(seleccion);

    // Validar selección
    while (seleccion < 1 || seleccion > planes.length || isNaN(seleccion)) {
        alert("Selección inválida, por favor ingrese un número correcto.");
        seleccion = prompt("Seleccione un plan escribiendo el número (1 = Brazilian Jiujitsu, 2 = MMA o 3 = Full Access):");
        seleccion = parseInt(seleccion);
    }

    planSeleccionado = planes[seleccion - 1];
    const precioPlan = precios[seleccion - 1];

    let confirmacion = confirm(`Seleccionaste el plan ${planSeleccionado} por $${precioPlan} USD al mes. ¿Deseas confirmar tu inscripción?`);

    if (confirmacion) {
        alert("¡Inscripción realizada con éxito!");
        usuariosRegistrados.push({
            nombre: nombreUsuario,
            edad: edadUsuario,
            plan: planSeleccionado,
            precio: precioPlan
        });
    } else {
        alert("No se realizó la inscripción. ¡Te esperamos pronto!");
    }
}

// Bucle para permitir múltiples inscripciones
let continuar = true;

while (continuar) {
    inscribirUsuario();
    continuar = confirm("¿Desea inscribir a otro usuario?");
}

alert("¡Gracias por inscribirse a Light Reaction BJJ");

// Mostrar usuarios registrados al final
if (usuariosRegistrados.length > 0) {
    console.log("Lista final de usuarios registrados:");
    console.table(usuariosRegistrados);

    // Calcular el total de inscripciones
    let totalInscripciones = 0;
    for (let i = 0; i < usuariosRegistrados.length; i++) {
        totalInscripciones += usuariosRegistrados[i].precio;
    }

    console.log(`Total recaudado en inscripciones: $${totalInscripciones} USD`);
    alert(`Total recaudado en inscripciones: $${totalInscripciones} USD`);
} else {
    console.log("No se registraron usuarios.");
}

