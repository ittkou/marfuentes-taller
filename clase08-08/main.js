import Vehiculo from "./vehiculo.js";
//forma 1 - envio de parametros a traves del constructor

function ejecutar() {
  let kilometraje = document.getElementById("inp_km").value;

  let vehiculo = new Vehiculo(kilometraje); //creamos la instancia de la clase
  vehiculo.mostrar_km();
}

document.getElementById("btn_mostrar").addEventListener("click", ejecutar);

//forma 2

const mostrar_marca = () => {
  let vehiculo = new Vehiculo();
  //asignamos valor al atributo
  vehiculo.marca = document.getElementById("slt_marca").value;
  //posteriormente invocamos al metodo mostrar_marca()
  vehiculo.mostrar_marca();
};

document.getElementById("btn_aceptar").addEventListener("click", mostrar_marca);
