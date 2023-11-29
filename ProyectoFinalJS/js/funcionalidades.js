const bottonBurger = document.querySelector('#botton-burger');
const listaNav = document.querySelector('.nav-list_responsive');
const carBotton = document.querySelector('.nav-carrito');
const carritoCompras = document.querySelector('#carrito');

const desplegarMenu = ()=>{
    if(!listaNav.classList.contains('visibility-flex')){
        listaNav.classList.add('visibility-flex');
        carritoCompras.classList.add('visibility-block')
        desplegarCarrito()
    }
    else{
        listaNav.classList.remove('visibility-flex')
    }
}

const desplegarCarrito = ()=>{
    if(!carritoCompras.classList.contains('visibility-block')){
        carritoCompras.classList.add('visibility-block')
        listaNav.classList.add('visibility-flex');
        desplegarMenu()
    }
    else{
        carritoCompras.classList.remove('visibility-block')
    }
}


bottonBurger.addEventListener('click', desplegarMenu);
carBotton.addEventListener('click', desplegarCarrito);