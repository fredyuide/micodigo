let model;
let imageElement = document.getElementById('image');
let predictionText = document.getElementById('prediction');

async function loadModel() {
    model = await mobilenet.load();
    predictionText.innerText = 'Modelo cargado. ¡Por favor sube una imagen!';
}

async function classifyImage() {
    const predictions = await model.classify(imageElement);
    const prediction = predictions[0].className;
    const confidence = (predictions[0].probability * 100).toFixed(2);
    predictionText.innerText = `Predicción: ${prediction} (Confianza: ${confidence}%)`;
}

document.getElementById('imageInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageElement.src = e.target.result;
            imageElement.style.display = 'block';
            imageElement.onload = function() {
                predictionText.innerText = 'Clasificando...';
                classifyImage();
            };
        };
        reader.readAsDataURL(file);
    }
});

loadModel();
