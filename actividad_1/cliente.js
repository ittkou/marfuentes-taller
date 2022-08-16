export default class Cliente {

 constructor(nombre,apellido,dni)
{
    this.nombre1 = nombre
    this.apellido1 = apellido
    this.dni1 = dni
}

mostrar_datos_personales()
{
    console.log(
        `Nombre: ${this.nombre1}
        Apellido: ${this.apellido1}
         DNI: ${this.dni1}`
    )
}

}