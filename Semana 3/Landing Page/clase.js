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
    e.preventDefault();

    let numero = 15;
    let cadenaTexto = "HolaMundo";
    let booleano = true;
    let fecha = new Date();

    const objeto = {
        name: "Pedro",
        edad: 22
    };

    let arreglo = [objeto];

    let nombre = document.getElementById("inputNombre").value;
    let peso = document.getElementById("inputPeso").value;

    alert(
        `Información enviada:
        Nombre: ${nombre}
        Peso: ${peso} Kg`
    );
}

function impresion() {
    console.log("Hola Mundo");
}
