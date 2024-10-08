import { creaEstilo, creaLi, crearParrafo } from "./funciones.js";

function agregarParrafo() {
    // 1.- Seleccionar el elemento HTML donde vamos a añadir el párrafo
    let container = document.querySelector('#contenedor');
    
    // 4.- Añadir el p al elemento seleccionado en el  paso 1
    container.append(crearParrafo());
}

function listado() {
    let ul = document.querySelectorAll('ul')[0];
    
    ul.append(creaLi());
}

function creaConEstilo() {
    document.body.append(creaEstilo());
    document.querySelector('button[disabled]').disabled=false;
}

function changeStyle() {
    // Cuando el color sea azul, se ponga en rojo y cambie el texto del botón
    let divEstiloso = document.getElementById('divEstiloso');
    
    // console.log(boton);
    let boton = document.querySelector('#btnStyle');
    if(divEstiloso.style.color == 'red') {
        divEstiloso.style.color = "blue";
        boton.innerHTML = 'Cambia a Rojo';
    } else {
        divEstiloso.style.color = "red";
        boton.innerHTML = 'Cambia a Azul';
    }  
}

function cambiaTodosColor() {
    let arrayDiv = document.querySelectorAll('.titulo');
    console.log(arrayDiv);
    
    let boton = document.querySelector('#btnStyle');
    let textoBoton = '';
    arrayDiv.forEach( div => {
        if(div.style.color === 'red') {
            div.style.color = 'blue';
            textoBoton = 'Cambia a Rojo';
        } else {
            div.style.color = 'red';
            textoBoton = 'Cambia a Azul';
        }
    });
    boton.textContent = textoBoton;
}

window.dameParrafo = agregarParrafo;
window.creaEstiloso = creaConEstilo;
window.lista = listado;
window.changeStyle = cambiaTodosColor;