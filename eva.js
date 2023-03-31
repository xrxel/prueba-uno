// PRODUCTOS
const productos = [
    // Tierra de hojas
    {
        id: "Tierra-de-hojas-01",
        titulo: "Tierra de hojas 01",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\tierra 1.jpg",
        categoria: {
            nombre: "Tierra",
            id: "Tierra"
        },
        precio: 1000
    },
    {
        id: "Tierra-de-hojas-02",
        titulo: "Tierra de hojas 02",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\tierra 2.jpg",
        categoria: {
            nombre: "Tierra",
            id: "Tierra"
        },
        precio: 1000
    },
    {
        id: "Tierra-de-hojas-03",
        titulo: "Tierra de hojas 03",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\tierra 3.jpg",
        categoria: {
            nombre: "Tierra",
            id: "Tierra"
        },
        precio: 1000
    },
    {
        id: "Tierra-de-hojas-04",
        titulo: "Tierra de hojas 04",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\tierra 4.jpg",
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
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\semillas\semilla 1.jpg",
        categoria: {
            nombre: "Semilla",
            id: "Semilla"
        },
        precio: 1000
    },
    {
        id: "Semilla-02",
        titulo: "Semilla 02",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\semillas\semilla 2.jpg",
        categoria: {
            nombre: "Semilla",
            id: "Semilla"
        },
        precio: 1000
    },
    {
        id: "Semilla-03",
        titulo: "Semilla 03",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\semillas\semilla 3.jpg",
        categoria: {
            nombre: "Semilla",
            id: "Semilla"
        },
        precio: 1000
    },
    {
        id: "Semilla-04",
        titulo: "Semilla 04",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\semillas\semilla 4.jpg",
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
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\fertilzantes\fertilizante 1.jpg",
        categoria: {
            nombre: "Fertilizante",
            id: "Fertilizante"
        },
        precio: 1000
    },
    {
        id: "Fertilizante-02",
        titulo: " Fertilizante-02",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\fertilzantes\fertilizante 2.jpg",
        categoria: {
            nombre: "Fertilizante",
            id: "Fertilizante"
        },
        precio: 1000
    },
    {
        id: "Fertilizante-03",
        titulo: " Fertilizante-03",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\fertilzantes\fertilizante 3.jpg",
        categoria: {
            nombre: "Fertilizante",
            id: "Fertilizante"
        },
        precio: 1000
    },
    {
        id: "Fertilizante-04",
        titulo: " Fertilizante-04",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\fertilzantes\fertilizante 4.jpg",
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
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\obj-reciclables\obj 1.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    },
    {
        id: "obj-reciclable-02",
        titulo: " obj-reciclable-02",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\obj-reciclables\obj 2.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    },
    {
        id: "obj-reciclable-03",
        titulo: " obj-reciclable-03",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\obj-reciclables\obj 3.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    },
    {
        id: "obj-reciclable-04",
        titulo: " obj-reciclable-04",
        imagen: "C:\Users\L14\Desktop\evaluacion parcial 1\images\obj-reciclables\obj 4.jpg",
        categoria: {
            nombre: "obj-reciclable",
            id: "obj-reciclable"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(){

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =  `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle">
            <h3 class="pruduc-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="agrgar-producto">Agregar</button>
        </div>
    `

    
    })

}
/*
<div class="producto">
    <img class="producto-imagen" src="images/tierra 1.jpg" alt="">
    <div class="producto-detalle">
        <h3 class="pruduc-titulo">Tierra de Hojas Anasac</h3>
        <p class="producto-precio">Precio: $2500</p>
        <button class="agrgar-producto">Agregar</button>
    </div>
</div>
*/