export default class Vehiculo {

    //estoy declarando o inicializando el atributo marca
    marca = ''

    constructor(kilometraje)
    {
        this.kilometraje = kilometraje
    }


    mostrar_km()
    {

    }
    mostrar_marca() {
        console.log(`
            Marca del vehiculo: ${this.marca}
        `)
    }
}