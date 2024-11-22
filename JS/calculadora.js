var num1=null;
var num2=null;
var operacion = '';
function setearValor(valor){
    let valorActual=document.getElementById('id-display').innerText;
    console.log(valorActual)
    document.getElementById('id-display').innerText = valor;
}
function setearValorConcatenado(valor){
    let valorActual=document.getElementById('id-display').innerText;
    console.log(valorActual)
    document.getElementById('id-display').innerText = valorActual+valor;
}

function recibirValor(valor){
    console.log(valor);
    if(num1===null){
        num1=valor
    }else{
        num2=valor;
    }
}

function evaluarOperacion(op){
    operacion=op
}

function igual(){
    let valorFinal;
    if(operacion ==='+' ){
        valorFinal= num1+num2;
    }else if(operacion==='-'){
        valorFinal=num1-num2;
    }else if (operacion==='X'){
        valorFinal=num1*num2
    }else if(operacion==='%'){
        valorFinal= num1/num2
    }
    setearValor(valorFinal);
}