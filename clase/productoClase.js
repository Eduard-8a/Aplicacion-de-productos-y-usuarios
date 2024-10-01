class Producto {
    constructor(data) {
        this.id = data.id;
        this.empresa = data.empresa;
        this.producto = data.producto;
        this.tipoProducto = data.tipoProducto;
    }

    set id(id) {
        this._id = id;
    }

    set empresa(empresa) {
        const empresaRegex = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (empresaRegex.test(empresa)) {
            this._empresa = empresa;
        }
    }

    set producto(producto = "") {
        if (producto.length > 0 && producto.length <= 15) {
            this._producto = producto;
        }
    }

    set tipoProducto(tipoProducto) {
        this._tipoProducto = tipoProducto;
    }

    get getproducto() {
        const conid = {
            id: this._id,
            empresa: this._empresa,
            producto: this._producto,
            tipoProducto: this._tipoProducto
        };
        const sinid = {
            empresa: this._empresa,
            producto: this._producto,
            tipoProducto: this._tipoProducto
        };
        return this.id ? conid : sinid;
    }
}

module.exports = Producto;
