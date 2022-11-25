"use strict";
var btn = document.getElementById("btn");
var texto = document.getElementById("texto");
btn.addEventListener("click", function () { return desplegarTexto(); });
function desplegarTexto() {
    if (texto.classList.toggle("texto-oculto")) {
        texto.classList.add("mostrar-texto");
        btn.innerText = "Leer Mas";
    }
    else {
        btn.innerText = "Leer Menos";
        texto.classList.remove("mosrear-texto");
    }
}
