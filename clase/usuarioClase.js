class Usuario {
    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.usuario = data.usuario;
        this.password = data.password;
        this.salt = data.salt;
        this.tipoUsuario = data.tipoUsuario;
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        const nombreRegex = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)) {
            this._nombre = nombre;
        }
    }

    set usuario(usuario = "") {
        if (usuario.length > 0 && usuario.length <= 15) {
            this._usuario = usuario;
        }
    }

    set password(password) {
        this._password = password;
    }

    set salt(salt) {
        this._salt = salt;
    }

    set tipoUsuario(tipoUsuario) {
        this._tipoUsuario = tipoUsuario;
    }

    get getUsuario() {
        const conid = {
            id: this._id,
            nombre: this._nombre,
            usuario: this._usuario,
            password: this._password,
            salt: this._salt,
            tipoUsuario: this._tipoUsuario
        };

        const sinid = {
            nombre: this._nombre,
            usuario: this._usuario,
            password: this._password,
            salt: this._salt,
            tipoUsuario: this._tipoUsuario
        };

        // Corregir el return
        return this._id ? conid : sinid;
    }
}

module.exports = Usuario;
