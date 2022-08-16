export default class Cliente {
    

    constructor(nm, ap, dni)
    {
        this.nombre = nm;
        this.apellido = ap;
        this.dni = dni;
    }

    mostrar_datos_personales() {
        alert(`
            nombre = ${this.nombre}
            apelldio = ${this.apellido}
            dni = ${this.dni}
            `)
    }
}