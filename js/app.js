"use strict";

const select = document.querySelector("#select");
//
//Funciones
//
/** validaremos una palabra de 5 letras que empieza a y termina a
 * //Pista: regexOb.test(texto) Devuelve true o false según el patrón buscando coincidencia con el texto
 */
const validarPalabra = () => {
    const pattern = /^a[a-z]{3}a$/;
    const texto = prompt("Texto (patrón:\"axxxa\")");

    if (pattern.test(texto)) { //cumple con el patrón

    } else {
        alerta(`${texto} no cumple con el patrón "axxxa"`)
    }
}


/**
 * @param{string} mensaje
 */
const alerta = (mensaje) => {
    const msgEl = document.querySelector(".mensajes");

    msgEl.innerHTML = `<strong style="color:red">${mensaje}</strong>`
}
//
//Eventos
//
//SEGUNDO EJERCICIO
//Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999) Los números pueden tener entre 1 y 3 dígitos.
const validarCoordenada = () => {
    const patron = /^\d{1,3},[0-9]{1,3}$/;
    const num = prompt("Coordenada (\"999,999\")");

    if (!patron.test(num)) { //No cumple con el patrón
        //no hado nada
        alerta(`${num} no cumple con el patrón "999,999"`);
    }
}




const alerta2 = (mensaje) => {
    const msgEl2 = document.querySelector(".mensajes");
    msgEl2.innerHTML = `<strong style="color:red">${mensaje}</strong>`
}
//TERCER EJERCICIO
/**
 * 
 * @param {objetct} pattern patrón a comparar con el string
 * @param {string} msgPrompt mensaje del prompt para que el usuario sepa lo que hacer
 */
const validarExpresionRegular = (pattern, msgPrompt) => {
    const texto = prompt(msgPrompt);

    if (!pattern.test(texto)) { //No cumple con el patrón
        alerta(`${texto} no cumple con el patrón: ${msgPrompt}`);
    }
}

//EJERCICIO MATCH
/**
 * 
 * @returns {Array} Devuelve un array con números o vacío si no encuentra números
 */
const buscarNumeros = () => {
    let resultado = [];
    //buscamos números
    const patron = /\d/;
    const cadena = prompt("Dame mucho tecto alfanumérico");
    resultado = cadena.match(patron);
    return resultado;
}

/**
 * 
 * 
 * @param {Object} e Evento del selector 
 */
select.onchange = (e) => {
    switch (e.target.value) {
        case "0":
            break;
        case "1":
            //validaremos una palabra de 5 letras que empieza a y termina a
            validarPalabra();
            break;
        case "2":
            //Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999) Los números pueden tener entre 1 y 3 dígitos.
            validarCoordenada()
            break;
        case "3":
            //Confecciona una expresión regular que valide el ingreso del nombre de un día de la semana y un número de mes de 1 o 2 dígitos: Ej: "Lunes, 31"
            validarExpresionRegular(/^(Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo),[ ]?\d{1,2}$/,
                `Fecha: "Miércoles,31"`);
            break;
        case "4":
            //Valida si una cadena tiene el formato de fecha dd/mm/aa
            validarExpresionRegular(
                /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
                "Fecha: dd/mm/aaaa. Ej: 1/1/2001"
            )
            break;
        case "5":
            //Valida un número si es entero, se admiten los símbolos + ó -. Ejemplo: -3
            validarExpresionRegular(
                /^[+-]?\d$/,
                "Número (Formatos Válidos: 1, -18, +23"
            );
            break;
        case "6":
            //Comprobar por un promp si una palabra empieza por "hiper" o "hipo" 
            validarExpresionRegular(
                /^(hiper|hipo)/,
                "palabra que empiece por hiper o hipo"
            );
        case "7":
            //Oración con alguna palabra de al menos 6 caracteres
            validarExpresionRegular(
                /^.{6,}$/,
                "Mínimo 6 caracteres"
            )
            break;
        case "8":
            validarExpresionRegular(
                /Madrid/i, //i es un lag que no distingue mayúsculas de minúsculas
                "Capital de España"
            )
            break;
        case "9":
            validarExpresionRegular(
                /^\s*$/,
                "Cadena en blanco"
            )
            break;
        case "match":
            //buscar números
            let numeros = buscarNumeros()
            console.log(numeros)
            break;

        default:
            break;
    }
}



