const express = require("express");
const usuariosRutas = require("./rutas/rutasUsuarios");
const productosRutas = require("./rutas/rutasProductos");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/productos", productosRutas);
app.use("/usuarios", usuariosRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
});
