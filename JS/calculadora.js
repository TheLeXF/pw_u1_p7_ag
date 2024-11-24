var num1 = null;
var num2 = null;
var operacion = '';
var operando = false;

function setearValor(valor) {
    document.getElementById('id-display').innerText = valor;
}
function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {

    if (!operando) {
        if (num1 === null) {
            num1 = valor.toString();
            setearValor(num1);
        } else {
            num1 += valor.toString();
            setearValor(num1);
        }
    } else {
        if (num2 === null) {
            num2 = valor.toString();
            setearValor(num2);
        } else {
            num2 += valor.toString();
            setearValor(num2);
        }
    }
}

function evaluarOperacion(op) {
    if (num1 !== null) {
        operacion = op;
        operando = true;
        setearValor(operacion);
    }

}

function igual() {
    let valorFinal;
    if (num1 !== null && num2 !== null) {
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);

        if (operacion === '+') {
            valorFinal = n1 + n2;
        } else if (operacion === '-') {
            valorFinal = n1 - n2;
        } else if (operacion === 'X') {
            valorFinal = n1 * n2;
        } else if (operacion === '%') {
            valorFinal = n1 / n2;
            valorFinal.toFixed(5);
        }
        setearValor(valorFinal);
    }

}

function reset() {
    num1 = null;
    num2 = null;
    operacion = '';
    operando = false;
    setearValor('0')

}

function borrar() {

    let display = document.getElementById('id-display').innerText;

    if (!operando) {
        if (num1 !== null && num1.length > 0) {
            num1 = num1.slice(0, -1);
            setearValor(num1 || '0');
        }
    } else {
        if (num2 !== null && num2.length > 0) {
            num2 = num2.slice(0, -1);
            setearValor(num2 || operacion);
        } else if (num2 === null && operacion.length > 0) {
            operacion = '';
            operando = false;
            setearValor(num1 || '0');
        }
    }
}