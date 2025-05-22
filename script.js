const productos = [
    {
        id: 1,
        nombre: "Laptop EliteBook",
        precio: 1200,
        categoria: "Tecnología",
        stock: 15,
        descripcion: "Laptop profesional con procesador i7 y 16GB RAM",
        disponible: true
    },
    {
        id: 2,
        nombre: "Smartphone X10",
        precio: 799,
        categoria: "Tecnología",
        stock: 0,
        descripcion: "Teléfono inteligente con cámara de 48MP",
        disponible: false
    },
    {
        id: 3,
        nombre: "Auriculares Inalámbricos",
        precio: 149,
        categoria: "Audio",
        stock: 32,
        descripcion: "Auriculares con cancelación de ruido",
        disponible: true
    },
    {
        id: 4,
        nombre: "Monitor 27\" 4K",
        precio: 399,
        categoria: "Tecnología",
        stock: 8,
        descripcion: "Monitor UHD con pantalla IPS",
        disponible: true
    },
    {
        id: 5,
        nombre: "Teclado Mecánico",
        precio: 89,
        categoria: "Periféricos",
        stock: 24,
        descripcion: "Teclado mecánico con retroiluminación RGB",
        disponible: true
    },
    {
        id: 6,
        nombre: "Ratón Gaming",
        precio: 59,
        categoria: "Periféricos",
        stock: 0,
        descripcion: "Ratón de alta precisión para juegos",
        disponible: false
    },
    {
        id: 7,
        nombre: "Disco Duro Externo 1TB",
        precio: 69,
        categoria: "Almacenamiento",
        stock: 17,
        descripcion: "Disco duro portátil USB 3.0",
        disponible: true
    },
    {
        id: 8,
        nombre: "Impresora Multifunción",
        precio: 129,
        categoria: "Oficina",
        stock: 5,
        descripcion: "Impresora láser con escáner integrado",
        disponible: true
    },
    {
        id: 9,
        nombre: "Tablet Pro",
        precio: 349,
        categoria: "Tecnología",
        stock: 12,
        descripcion: "Tablet con pantalla OLED de 10.5 pulgadas",
        disponible: true
    }
];

function comprarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto && producto.stock > 0) {
        alert(`Has comprado: ${producto.nombre}\nTotal: $${producto.precio}`);
    }
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto && producto.stock > 0) {
        alert(`Agregado al carrito: ${producto.nombre}`);
    }
}

function renderizarProductos() {
    const productosHTML = productos.map(producto => `
        <div class="producto">
            <h2>${producto.nombre}</h2>
            <span class="categoria">${producto.categoria}</span>
            <p>${producto.descripcion}</p>
            <p class="precio">Precio: $${producto.precio}</p>
            <p class="${producto.stock > 0 ? 'disponible' : 'stock'}">
                ${producto.stock > 0 ? `Disponible (${producto.stock} unidades)` : 'Agotado'}
            </p>
            <div class="botones-container">
                <button 
                    class="btn btn-comprar" 
                    ${producto.stock === 0 ? 'disabled' : ''}
                    onclick="comprarProducto(${producto.id})"
                >
                    Comprar ahora
                </button>
                <button 
                    class="btn btn-carrito" 
                    ${producto.stock === 0 ? 'disabled' : ''}
                    onclick="agregarAlCarrito(${producto.id})"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    `).join('');

    document.getElementById('productos').innerHTML = productosHTML;
}

document.addEventListener('DOMContentLoaded', renderizarProductos);