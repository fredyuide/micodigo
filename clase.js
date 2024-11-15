function alerta() {
    alert("Bienvenido!!!");
}

function cambiarText() {
    document.getElementById("holamundo").innerText = "Gris";
}

function cambiarClase() {
    document.getElementById("verde").className = "colorAmarillo";
}

function enviarFormulario(e) {
    e.preventDefault(); // Previene la recarga de la página.

    let numero = 15;
    let cadenaTexto = "HolaMundo";
    let booleano = true; // Cambiado a `true` en minúsculas.
    let fecha = new Date();

    const objeto = {
        name: "Pedro",
        edad: 22
    };

    let arreglo = [objeto]; // Corregido: usa corchetes para definir un arreglo.

    // Obtén los valores del formulario.
    let nombre = document.getElementById("inputNombre").value;
    let peso = document.getElementById("inputPeso").value;

    // Muestra un alert con la información.
    alert(
        `Información enviada:
        Nombre: ${nombre}
        Peso: ${peso} Kg`
    );
}

function impresion() {
    console.log("Hola Mundo");
}
