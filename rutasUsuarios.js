var ruta = require("express").Router();
var { mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorId } = require("../bd/usuariosBD");

ruta.get("/", async (req, res) => {
    const usuarios = await mostrarUsuarios();
    res.json(usuarios);
});

ruta.get("/buscarPorId/:id", async (req, res) => {
    const usuarioValido = await buscarPorId(req.params.id);
    res.json(usuarioValido);
});

ruta.delete("/borrarUsuario/:id", async (req, res) => {
    const borrado = await borrarUsuario(req.params.id);
    res.json({ borrado });
});

ruta.post("/nuevoUsuario", async (req, res) => {
    const usuarioValido = await nuevoUsuario(req.body);
    res.json({ usuarioValido });
});

module.exports = ruta;
