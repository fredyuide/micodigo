// app.js

let model;
let imageElement = document.getElementById('image');
let predictionText = document.getElementById('prediction');

// Cargar el modelo MobileNet
async function loadModel() {
    console.log('Cargando el modelo...');
    model = await mobilenet.load();
    console.log('Modelo cargado');
    predictionText.innerText = 'Modelo cargado. ¡Por favor sube una imagen!';
}

// Clasificar la imagen
async function classifyImage() {
    console.log('Clasificando la imagen...');
    const predictions = await model.classify(imageElement);

    // Mostrar el resultado de la predicción
    const prediction = predictions[0].className;
    const confidence = (predictions[0].probability * 100).toFixed(2);
    predictionText.innerText = `Predicción: ${prediction} (Confianza: ${confidence}%)`;
}

// Evento de cambio cuando el usuario sube una imagen
document.getElementById('imageInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageElement.src = e.target.result;
            imageElement.style.display = 'block'; // Mostrar la imagen
            imageElement.onload = function() {
                // Esperamos que la imagen se haya cargado antes de clasificarla
                predictionText.innerText = 'Clasificando...';
                classifyImage();
            };
        };
        reader.readAsDataURL(file);
    }
});

// Cargar el modelo cuando la página esté lista
loadModel();
