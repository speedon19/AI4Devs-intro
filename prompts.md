Buenos eres un expertos en full stack, vamos a realizar un ejercicios muy sencillo de un app, donde va tener de titulo Reverse string, en este deberia ver una caja de texto donde el usuario introduce el un texto, y deberia ver un boton que diga reverse, cuando el usuario presiona el reverse, deberia ver otro texto donde se voltea el texto y un boton para copiar el texto volteado

¡Vamos a construir esta aplicación sencilla! A continuación te muestro cómo puedes hacer una app web que invierta un texto introducido por el usuario y le permita copiarlo con un botón.

Estructura del Proyecto
index.html: Contiene la estructura básica de la página.
script.js: Contiene la lógica de JavaScript para invertir el texto y copiarlo.
styles.css (opcional): Si quieres agregar algunos estilos básicos.
Paso 1: Estructura HTML (index.html)
Crea un archivo index.html con el siguiente código:

html
Copiar código
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Reverse String</h1>
        <div class="input-section">
            <label for="inputText">Introduce un texto:</label>
            <input type="text" id="inputText" placeholder="Escribe aquí...">
            <button onclick="reverseText()">Reverse</button>
        </div>
        <div class="output-section">
            <h2>Texto Invertido:</h2>
            <p id="reversedText"></p>
            <button id="copyButton" onclick="copyText()">Copiar Texto</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>


Paso 2: Lógica en JavaScript (script.js)
Crea un archivo script.js donde implementamos la lógica de invertir el texto y copiarlo al portapapeles:

javascript
Copiar código
// Función para invertir el texto
function reverseText() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const reversedText = inputText.split('').reverse().join('');
        document.getElementById('reversedText').innerText = reversedText;
    } else {
        document.getElementById('reversedText').innerText = 'Por favor, introduce un texto.';
    }
}

// Función para copiar el texto invertido
function copyText() {
    const reversedText = document.getElementById('reversedText').innerText;
    if (reversedText && reversedText !== 'Por favor, introduce un texto.') {
        navigator.clipboard.writeText(reversedText).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            alert('Error al copiar el texto: ' + err);
        });
    } else {
        alert('No hay texto para copiar.');
    }
}
Paso 3: Estilos (Opcional) (styles.css)
Si quieres darle un poco de estilo a la página, aquí tienes un CSS básico:

css
Copiar código
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    color: #333;
}

.input-section, .output-section {
    margin: 20px 0;
}

input[type="text"] {
    padding: 10px;
    width: 80%;
    font-size: 16px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

#reversedText {
    font-size: 18px;
    font-weight: bold;
    color: #555;
    margin-bottom: 10px;
}
Paso 4: Funcionamiento
Caja de texto: Aquí el usuario introduce el texto que quiere invertir.
Botón "Reverse": Invierte el texto cuando el usuario hace clic en este botón.
Texto invertido: Aparece en la pantalla una vez que se ha invertido el texto.
Botón "Copiar": Permite copiar el texto invertido al portapapeles del usuario.
Explicación de la Lógica
La función reverseText() toma el texto introducido por el usuario, lo invierte usando split(), reverse(), y join(), y lo muestra en la página.
La función copyText() usa la API de portapapeles (navigator.clipboard.writeText()) para copiar el texto invertido cuando el usuario hace clic en el botón "Copiar". Si no hay texto o si no se ha invertido, muestra una alerta.
Conclusión
¡Listo! Ahora tienes una pequeña aplicación web que invierte un texto y permite copiar el resultado. Puedes modificar los estilos o agregar funcionalidades adicionales según prefieras. ¿Te gustaría que te ayude con algo más en este proyecto?