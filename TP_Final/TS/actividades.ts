"use strict"

const btn = document.getElementById("btn") as HTMLButtonElement;
const texto = document.getElementById("texto") as HTMLElement;

btn.addEventListener("click", () => desplegarTexto());

function desplegarTexto():void {
    if(texto.classList.toggle("texto-oculto")){
        texto.classList.add("mostrar-texto");
        btn.innerText = "Leer Mas"
    }else{
        btn.innerText = "Leer Menos"
        texto.classList.remove("mosrear-texto")
    }
}






