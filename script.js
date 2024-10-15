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