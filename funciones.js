export function crearParrafo() {
    // 2.- Crear el elemento HTML p
    let p = document.createElement('p');
    // 3.- Añadir el conenido (lorem) al p
    p.innerHTML = 'Este es mi <b>párrafo</b>, que guay!';

    return p;
}

export function creaLi() {
    let elemento = prompt('Introduce un elemento de la lista: ');
    let li = document.createElement('li');
    li.innerHTML = elemento;

    return li;
}

export function creaEstilo() {
    let div = document.createElement('div');
    div.innerHTML = 'Josemaría Gª de Polavieja';
    div.className = 'titulo';
    div.style.color = 'red'; // Tengo que poner esta propiedad para poder cambiarla la primera vez en el array de divs
    div.id = 'divEstiloso';
    return div;
}