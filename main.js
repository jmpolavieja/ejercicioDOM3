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
}

window.dameParrafo = agregarParrafo;
window.creaEstiloso = creaConEstilo;
window.lista = listado;