const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}

const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}

const cambiarTamaño = (idelemento, tamaño) => {
    document.getElementById(idelemento).style.fontSize = tamaño;
}
const agregarElemento = (idelemento) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + '<li>Calculadora 4 </li>';
}

const conceptosJS=()=> {
    /* Tipos de variables en JS
    var: declaraciones globales ya no es comumente usado 
    let: ambito local (nivel de funcion), dentro del bloque {}, no permite una redeclaracion dentro del mismo bloque
    const: para variables que no cambian
    
    */
   let nombre="Alexis";
   let numero1=10;
   let numero2=10.1;
   const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(numero2);
    console.log(PI);
    console.log("Entro al metodo de calculo");
    /* Declaracion de arreglos*/
    const diasSemana=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[2]);
    console.log(diasSemana[3]);

    console.log(diasSemana[5]);
    //Dentro JS el concepto de nulo o no existencia: es undefined
    //Para comparaciones === igualdad , !== diferencia

    let valor = null;
    console.log(valor);

    diasSemana.push("Sabado");//Push Guarda al final del elemento
    console.log(diasSemana);
    diasSemana.unshift("Dias");//unshift Guarda la palabra al inicio del arreglo
    console.log(diasSemana);

    const numerosImpares=[1,3,5,7,9,11];
    console.log(numerosImpares);

    const numerosPares=[2,4,6,8,10];
    console.log(numerosPares);

    const numeros=numerosImpares.concat(numerosPares);
    console.log(numeros);

    for(const dia of diasSemana){
        console.log(dia);
        if (dia === "Viernes"){
            console.log("Al fin viernes");
        }else{
            console.log("Aun no  es viernes");
        }
    }

    //Manejo de objetos
    const miEstudiante = {
        nombre:"Alexis",
        apellido:"Guanoluisa",
        edad:25,
        genero:"Masculino",
        ciudadNacimiento:"Quito"
    }

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.ciudadNacimiento);

    if (miEstudiante.nombre === "Alexis"){
        console.log("Bienvenido");
    }else{
        console.log("Error");
    }
    
    miEstudiante.apellido="Espin";
    console.log(miEstudiante);
    
    //Declaraciones de atributos pero como objetos

    const miProfesor ={
        nombre:"Daniel",
        apellido:"Espin",
        edad:null,
        direccion:{
            calle:"Av.America",
            casa:"120",
            barrio:"Rumipamba"
        }
    }
    console.log(miProfesor);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle="10 de Agosto";
    console.log(miProfesor);
    console.log(miProfesor.estatura);

    if (miProfesor.edad === miProfesor.estatura){
        console.log("Son iguales");
    }else{
        console.log("Estos no son lo mismo");
    }

}
