function handleReverse() {
    const inputString = document.getElementById("inputString").value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById("outputString").value = reversedString;

    // Habilitar el botón de copiar
    enableCopyButton();
}

function handleCopy() {
    const outputString = document.getElementById("outputString");
    navigator.clipboard.writeText(outputString.value).then(() => {
        showFeedback();
    }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

function enableCopyButton() {
    const copyBtn = document.getElementById("copyBtn");
    copyBtn.disabled = false;
    copyBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
    copyBtn.classList.add("bg-gray-500", "hover:bg-gray-600", "cursor-pointer");
    document.getElementById("feedback").classList.add("hidden"); // Ocultar el feedback si está visible
}

function showFeedback() {
    const feedback = document.getElementById("feedback");
    feedback.classList.remove("hidden");
    setTimeout(() => {
        feedback.classList.add("hidden");
    }, 2000);
}

document.getElementById("reverseBtn").addEventListener("click", handleReverse);
document.getElementById("copyBtn").addEventListener("click", handleCopy);
