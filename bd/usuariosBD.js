const usuariosBD = require("./conexion").usuarios;
const Usuario = require("../clase/usuarioClase");
const { encriptarPassword, validarPassword } = require("../middelwares/funcionesPassword");

// Validar los datos del usuario
function validarDatos(usuario2) {
    let datosCorrectos = false;
    if (usuario2.nombre && usuario2.usuario && usuario2.password) {
        datosCorrectos = true;
    }
    return datosCorrectos;
}

// Mostrar todos los usuarios
async function mostrarUsuarios() {
    const usuarios = await usuariosBD.get();
    const usuariosValidos = [];
    usuarios.forEach(usuario => {
        const usuario1 = new Usuario({ id: usuario.id, ...usuario.data() });
        const usuario2 = usuario1.getUsuario;
        if (validarDatos(usuario2)) {
            usuariosValidos.push(usuario2);
        }
    });
    return usuariosValidos;
}

// Buscar usuario por ID
async function buscarPorId(id) {
    const usuario = await usuariosBD.doc(id).get();
    const usuario1 = new Usuario({ id: usuario.id, ...usuario.data() });
    let usuarioValido = { error: true };
    if (validarDatos(usuario1.getUsuario)) {
        usuarioValido = usuario1.getUsuario;
    }
    return usuarioValido;
}

// Agregar nuevo usuario con encriptación de contraseña
async function nuevoUsuario(data) {
    const { salt, hash } = encriptarPassword(data.password);
    data.password = hash;
    data.salt = salt;
    data.tipoUsuario = "usuario"; // Tipo de usuario por defecto
    const usuario1 = new Usuario(data);
    let usuarioValido = false;
    if (validarDatos(usuario1.getUsuario)) {
        await usuariosBD.doc().set(usuario1.getUsuario);
        usuarioValido = true;
    }
    return usuarioValido;
}

// Borrar usuario por ID
async function borrarUsuario(id) {
    const usuario = await buscarPorId(id);
    let borrado = false;
    if (!usuario.error) {
        await usuariosBD.doc(id).delete();
        borrado = true;
    }
    return borrado;
}

module.exports = {
    mostrarUsuarios,
    nuevoUsuario,
    borrarUsuario,
    buscarPorId
};
