const admin = require("firebase-admin");
const keys = require("../keys.json"); // Cargar las credenciales de Firebase desde el archivo keys.json

// Inicializar Firebase con las credenciales
admin.initializeApp({
    credential: admin.credential.cert(keys),
});

// Conectar con la base de datos Firestore
const bd = admin.firestore();
const usuarios = bd.collection("miejemploDB"); // Colección de usuarios
const productos = bd.collection("productos");  // Colección de productos

module.exports = {
    usuarios,
    productos
};
