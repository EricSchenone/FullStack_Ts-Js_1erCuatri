"use strict";
var formElement = document.getElementById("form");
var inputs = document.querySelectorAll("input");
var consulta = document.getElementById("mensaje");
var alerta = document.getElementById("alerta");
formElement.addEventListener("submit", capturarDatos);
function capturarDatos(e) {
    e.preventDefault();
    for (var i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value == "" || consulta.value == "") {
            alerta.innerHTML = "Debe completar todos los campos. *";
        }
        else {
            console.log(inputs[i].value);
            alerta.innerHTML = "";
        }
    }
    console.log(consulta.value);
    formElement.reset();
}
