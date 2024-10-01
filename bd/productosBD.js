const productosBD = require("./conexion").productos;
const Producto = require("../clase/productoClase");

// Validar los datos del producto
function validarDatos(producto2) {
    let datosCorrectos = false;
    if (producto2.empresa && producto2.producto) {
        datosCorrectos = true;
    }
    return datosCorrectos;
}

// Mostrar todos los productos
async function mostrarProductos() {
    const productos = await productosBD.get();
    const productosValidos = [];
    productos.forEach(producto => {
        const producto1 = new Producto({ id: producto.id, ...producto.data() });
        const producto2 = producto1.getproducto;
        if (validarDatos(producto2)) {
            productosValidos.push(producto2);
        }
    });
    return productosValidos;
}

// Buscar producto por ID
async function buscarPorId(id) {
    const producto = await productosBD.doc(id).get();
    const producto1 = new Producto({ id: producto.id, ...producto.data() });
    let productoValido = { error: true };
    if (validarDatos(producto1.getproducto)) {
        productoValido = producto1.getproducto;
    }
    return productoValido;
}

// Agregar nuevo producto
async function nuevoProducto(data) {
    data.tipoProducto = "galletas"; // Tipo por defecto, se puede modificar
    const producto1 = new Producto(data);
    let productoValido = false;
    if (validarDatos(producto1.getproducto)) {
        await productosBD.doc().set(producto1.getproducto);
        productoValido = true;
    }
    return productoValido;
}

// Borrar producto por ID
async function borrarProducto(id) {
    const producto = await buscarPorId(id);
    let borrado = false;
    if (!producto.error) {
        await productosBD.doc(id).delete();
        borrado = true;
    }
    return borrado;
}

module.exports = {
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarPorId
};
