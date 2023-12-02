let sillones=[];
let telas=[];


fetch('./js/sillones.json')
.then(response => response.json())
.then(data =>{
    sillones = data
    cargarSillones(sillones);
})
fetch('./js/telas.json')
.then(response => response.json())
.then(data =>{
    telas = data
    cargarTelas(telas);
})

const contenedorSillones = document.querySelector('#grid-productos');

function cargarSilloness(sillones) {
    sillones.forEach(sillon =>{
        const {imagen, nombre, precio, id}= sillon
        const section = document.createElement('section');
        section.classList.add('card');
        section.innerHTML=`
                    <figure>
                        <img src="${imagen}" alt="${nombre}">
                    </figure>
                    <footer>
                        <h4>${nombre}</h4>
                        <p>$${precio}</p>
                        <a class="boton" href="#" data-id="${id}">AGREGAR AL CARRITO</a>
                    </footer>
        `
        contenedorSillones.insertBefore(section, contenedorSillones.children[1] )
    }) 
}
function cargarTelas(telas) {
    postres.forEach(tela =>{
        const {imagen, nombre, precio, id}= tela
        const section = document.createElement('section');
        section.classList.add('card');
        section.innerHTML=`
                    <figure>
                        <img src="${imagen}" alt="${nombre}">
                    </figure>
                    <footer>
                        <h4>${nombre}</h4>
                        <p>$${precio}</p>
                        <a class="boton" href="#" data-id="${id}">AGREGAR AL CARRITO</a>
                    </footer>
        `
        contenedorSillones.appendChild(section)
    }) 
}
