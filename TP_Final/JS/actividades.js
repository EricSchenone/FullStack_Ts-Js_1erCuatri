"use strict";
var btn = document.getElementById("btn");
var texto = document.getElementById("texto");
btn.addEventListener("click", function () { return desplegarTexto(); });
function desplegarTexto() {
    if (texto.classList.toggle("texto-oculto")) {
        texto.classList.add("mostrar-texto");
        btn.innerText = "Leer mas";
    }
    else {
        btn.innerText = "Leer menos";
        texto.classList.remove("mosrear-texto");
    }
}
