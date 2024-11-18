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

const conceptosJS = () => {
    /* Tipos de variables en JS
    var: declaraciones globales ya no es comumente usado 
    let: ambito local (nivel de funcion), dentro del bloque {}, no permite una redeclaracion dentro del mismo bloque
    const: para variables que no cambian
    
    */
    let nombre = "Alexis";
    let numero1 = 10;
    let numero2 = 10.1;
    const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(numero2);
    console.log(PI);
    console.log("Entro al metodo de calculo");
    /* Declaracion de arreglos*/
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

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

    const numerosImpares = [1, 3, 5, 7, 9, 11];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === "Viernes") {
            console.log("Al fin viernes");
        } else {
            console.log("Aun no  es viernes");
        }
    }

    //Manejo de objetos
    const miEstudiante = {
        nombre: "Alexis",
        apellido: "Guanoluisa",
        edad: 25,
        genero: "Masculino",
        ciudadNacimiento: "Quito"
    }

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.ciudadNacimiento);

    if (miEstudiante.nombre === "Alexis") {
        console.log("Bienvenido");
    } else {
        console.log("Error");
    }

    miEstudiante.apellido = "Espin";
    console.log(miEstudiante);

    //Declaraciones de atributos pero como objetos

    const miProfesor = {
        nombre: "Daniel",
        apellido: "Espin",
        edad: null,
        direccion: {
            calle: "Av.America",
            casa: "120",
            barrio: "Rumipamba"
        }
    }
    console.log(miProfesor);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle = "10 de Agosto";
    console.log(miProfesor);
    console.log(miProfesor.estatura);

    if (miProfesor.edad === miProfesor.estatura) {
        console.log("Son iguales");
    } else {
        console.log("Estos no son lo mismo");
    }

    const est1 = {
        nombre: "Diego",
        apellido: "Guanoluisa",
        edad: 45
    }

    const est2 = {
        nombre: "Silvia",
        apellido: "Espin",
        edad: 48
    }
    const est3 = {
        nombre: "Santiago",
        apellido: "Guanoluisa",
        edad: 19
    }

    const arregloEstudiantes = [est1, est2, est3];

    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[1].nombre);

    const arregloEstudiantes2 = [{ nombre: "jonathan", apellido: "Espin", edad: 28 },
    { nombre: "Anita", apellido: "Teran", edad: 39 },
    { nombre: "Carmela", apellido: "Narvaez", edad: 80 },
    { nombre: "Hugo", apellido: "Narvaez", edad: 55 },
    { nombre: "Hernan", apellido: "Rodriguez", edad: 45 }];

    console.log(arregloEstudiantes2);

    console.table(arregloEstudiantes2);

    //Uso del pop
    const estudiante = arregloEstudiantes2.pop();//el pop elimina el ultimo elemento del arreglo

    console.log(estudiante);

    console.table(arregloEstudiantes2);

    //Desestructuracion de arreglos 
    //consiste en separar en partes cada una de las posiciones del arreglo
    const colores = ['Amarillo', 'Azul', 'Verder', 'Rojo', 'Rosado'];

    const [p1, p2, p3, p4, p5] = colores;
    console.log(p1);
    console.log(p5);

    const [m1, m2, m3, m4, m5, m6, m7, m8] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m8);

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(mes2);
    console.log(mes5);

    //Desestructuracion de objetos
    const automovil = {
        marca: 'Toyota',
        modelo: 'Prius',
        anio: 2024,
        color: 'Plateado'
    }

    console.log("Desestructuracion de objetos")
    /*
        const { color, marca, modelo, anio } = automovil;
    
        console.log(marca);
        console.log(modelo);
        console.log(anio);
        console.log(color);
    
     const { color, marca, modelo, anio } = automovil2;
    
        console.log(marca);
        console.log(modelo);
        console.log(anio);
        console.log(color);*/

    desestructuracion(automovil);

    const { nombreP, raza, estatura } = { nombreP: 'Perro', raza: 'Pastor', estatura: 120 };
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);

    //Declare un objeto con atributo complejo
    // y vamos a desestructurar en especial el atributo de tipo complejo
    const universidad={
        nombre:'UCE',
        estudiantes:1000000,
        rector: {
            nombreR:'nombre1',
            apellidoR:'apellido1'
        }
    }   
    //En dos pasos
   // const{estudiantes, rector}=universidad
   // const{nombreR, apellidoR}=rector;
    //console.log(nombreR)
    //
    //una sola linea

    const{estudiantes, rector:{nombreR,apellidoR}}=universidad
    console.log(nombreR)
    console.log(apellidoR)


    //Duda Preguntar
   /* const miMascota = { nombreA: 'Kira', edadA: 6, vacunas: { vacuna1: 'parvovirus', vacuna2: 'rabia', vacuna3: 'moquillo' } }

    const{vacuna1,vacuna2,vacuna3}=miMascota.vacunas;
    console.log(vacuna1);
    console.log(vacuna2);
    console.log(vacuna3);*/

}

//  const desestructiracion(automovil)=>
const desestructuracion = ({ color, marca, modelo, anio }) => {
    console.log('Entro al metodo desestructurar')
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}

