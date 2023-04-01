const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
 

const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

contenedorCarritoProductos.innerHTML = "";

if (productosEnCarrito){

   contenedorCarritoProductos.classList.remove("disabled");
   contenedorCarritoAciones.classList.remove("disabled");
   contenedorCarritoComprado.classList.add("disabled");

    productosEnCarrito.array.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("clarrito-producto");
        div.innerHTML = `
        <div class="carrito-producto">
        <img class="imagen-carrito" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="Carrito-producto-nombre">
            <small>Material</small>
            <h3>${producto.titulo}</h3>                            
        </div>
        <div class="Carrito-producto-cantidad">
            <small>${producto.cantidad}</small>
            <p>1</p>                          
        </div>
        <div class="Carrito-producto-subtotal">
            <small>precio</small>
            <p>${producto.precio}</p>
        </div>
        <div class="Carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>${producto.precio * producto.cantidad}</p>     
            <button class="carrito-producto-borrar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>            
        </div>                          
    </div>
        `

        contenedorCarritoProductos.append(div);
    });


}

else {


}