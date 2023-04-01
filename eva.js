// PRODUCTOS
const productos = [
    // Tierra de hojas
    {
        id: "Tierra-de-hojas-01",
        titulo: "Tierra de hojas 01",
        imagen: "../images/tierra 1.jpg",
        categoria: {
            nombre: "Tierra",
            id: "Tierra"
        },
        precio: 1000
    },
    {
        id: "Tierra-de-hojas-02",
        titulo: "Tierra de hojas 02",
        imagen: "../images/tierra 2.jpg",
        categoria: {
            nombre: "Tierra",
            id: "Tierra"
        },
        precio: 1000
    },
    {
        id: "Tierra-de-hojas-03",
        titulo: "Tierra de hojas 03",
        imagen: "../images/tierra 3.jpg",
        categoria: {
            nombre: "Tierra",
            id: "Tierra"
        },
        precio: 1000
    },
    {
        id: "Tierra-de-hojas-04",
        titulo: "Tierra de hojas 04",
        imagen: "../images/tierra 4.jpg",
        categoria: {
            nombre: "Tierra",
            id: "Tierra"
        },
        precio: 1000
    },
    
    // Semillas
    {
        id: "Semilla-01",
        titulo: "Semilla 01",
        imagen: "../images/semillas/semilla 1.jpg",
        categoria: {
            nombre: "Semilla",
            id: "Semilla"
        },
        precio: 1000
    },
    {
        id: "Semilla-02",
        titulo: "Semilla 02",
        imagen: "../images/semillas/semilla 2.jpg",
        categoria: {
            nombre: "Semilla",
            id: "Semilla"
        },
        precio: 1000
    },
    {
        id: "Semilla-03",
        titulo: "Semilla 03",
        imagen: "../images/semillas/semilla 3.jpg",
        categoria: {
            nombre: "Semilla",
            id: "Semilla"
        },
        precio: 1000
    },
    {
        id: "Semilla-04",
        titulo: "Semilla 04",
        imagen: "../images/semillas/semilla 4.jpg",
        categoria: {
            nombre: "Semilla",
            id: "Semilla"
        },
        precio: 1000
    },
    // Fertilizante
    {
        id: "Fertilizante-01",
        titulo: " Fertilizante-01",
        imagen: "../images/fertilzantes/fertilizante 1.jpg",
        categoria: {
            nombre: "Fertilizante",
            id: "Fertilizante"
        },
        precio: 1000
    },
    {
        id: "Fertilizante-02",
        titulo: " Fertilizante-02",
        imagen: "../images/fertilzantes/fertilizante 2.jpg",
        categoria: {
            nombre: "Fertilizante",
            id: "Fertilizante"
        },
        precio: 1000
    },
    {
        id: "Fertilizante-03",
        titulo: " Fertilizante-03",
        imagen: "../images/fertilzantes/fertilizante 3.jpg",
        categoria: {
            nombre: "Fertilizante",
            id: "Fertilizante"
        },
        precio: 1000
    },
    {
        id: "Fertilizante-04",
        titulo: " Fertilizante-04",
        imagen: "../images/fertilzantes/fertilizante 4.jpg",
        categoria: {
            nombre: "Fertilizante",
            id: "Fertilizante"
        },
        precio: 1000
    },
     // obj-reciclable
     {
        id: "obj-reciclable-01",
        titulo: " obj-reciclable-01",
        imagen: "../images/obj-reciclables/obj1.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    },
    {
        id: "obj-reciclable-02",
        titulo: " obj-reciclable-02",
        imagen: "../images/obj-reciclables/obj2.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    },
    {
        id: "obj-reciclable-03",
        titulo: " obj-reciclable-03",
        imagen: "../images/obj-reciclables/onj 3.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    },
    {
        id: "obj-reciclable-04",
        titulo: " obj-reciclable-04",
        imagen: "../images/obj-reciclables/obj 4.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".agregar-producto");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = ""; 

    productosElegidos.forEach(producto => { /*forEch Recorre el elemento*/
       
    const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =  `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle">
            <h3 class="pruduc-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="agregar-producto" id="${producto.id}">Agregar</button>
        </div>
    `;

    contenedorProductos.append(div);

    
    })

    actualizarBotonesAgregar();
    console.log(botonesAgregar);

}
cargarProductos(productos);


botonesCategoria.forEach(boton => {
    boton.addEventListener("click",(e)=> {

        botonesCategoria.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");


        if(e.currentTarget.id !="todos") {
        
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        console.log(productoCategoria);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        } else {
            
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos); 
        }
        

    })


})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".agregar-producto");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);

       
    });

}    

const productosEnCarrito = [];

function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id; 
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }
    else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
   actualizarNumerito(); 

   localStorage.setItem("productos-en-Carrito",JSON.stringify(productosEnCarrito));    
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0 );
    numerito.innerText = nuevoNumerito;

}

