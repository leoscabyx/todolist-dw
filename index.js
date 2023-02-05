/* 
    Ejercicio: To Do List

*/

console.group("To Do List");

let $inputPrincipal = document.querySelector('.input');
let $botonAgregar = document.querySelector('.boton-agregar');
let $container = document.querySelector('.container');

class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }

    crearDiv(tarea){
        let div = document.createElement('div');
        div.classList.add('item');
        let inputItem = document.createElement('input');
        inputItem.setAttribute('disabled', 'true');
        inputItem.classList.add('item-input');
        inputItem.value = tarea;
        let botonEditar = document.createElement('button');
        botonEditar.classList.add('boton-editar');
        botonEditar.innerHTML = "🔒"
        let botonRemover = document.createElement('button');
        botonRemover.classList.add('boton-remover');
        botonRemover.innerHTML = "🗑️"
        
        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);
        $container.appendChild(div);
        
        botonEditar.addEventListener('click', () => {
            inputItem.disabled = !inputItem.disabled;
            botonEditar.innerHTML = inputItem.disabled ? "🔒" : "🔓";
        });

        botonRemover.addEventListener('click', () => {
            div.remove();
        });
    }
}

// let tarea1 = new Item("Instalar VSCode");

function chequearInput() {
    let nuevaTarea = $inputPrincipal.value.trim();
    if(nuevaTarea.length > 0){
        new Item(nuevaTarea);
        $inputPrincipal.value = '';
    }
}

$botonAgregar.addEventListener('click', () => {
    chequearInput();
})

console.groupEnd();


