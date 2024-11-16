
function cambiarTexto(idelemento, valor) {
    document.getElementById(idelemento).innerText = valor;
}

function cambiarColor(idelemento, color) {
    document.getElementById(idelemento).style.color = color
}

function cambiarTamaño(idelemento, tamaño) {
    document.getElementById(idelemento).style.fontSize = tamaño
}
function agregarElemento(idelemento) {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + '<li>Calculadora 4 </li>'
}
