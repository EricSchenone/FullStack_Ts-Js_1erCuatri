"use strict"

const formElement = document.getElementById("form") as HTMLFormElement;
const inputs = document.querySelectorAll("input");
const consulta = document.getElementById("mensaje") as HTMLTextAreaElement;
const alerta = document.getElementById("alerta") as HTMLParagraphElement;

formElement.addEventListener("submit", capturarDatos)

function capturarDatos(e: SubmitEvent) {
    e.preventDefault();
    for (let i: number = 0; i < inputs.length - 1; i++) {
        if(inputs[i].value == "" || consulta.value == "") {
        alerta.innerHTML = "Debe completar todos los campos. *";     
        }else{
            console.log(inputs[i].value);
            alerta.innerHTML = "";     
        }
    }   
    console.log(consulta.value);  
    formElement.reset();
}








