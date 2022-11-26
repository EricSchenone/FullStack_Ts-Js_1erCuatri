"use strict"

const btn = document.getElementById("btn") as HTMLButtonElement;
const texto = document.getElementById("texto") as HTMLElement;

btn.addEventListener("click", () => desplegarTexto());

function desplegarTexto():void {
    if(texto.classList.toggle("texto-oculto")){
        texto.classList.add("mostrar-texto");
        btn.innerText = "Leer mas"
    }else{
        btn.innerText = "Leer menos"
        texto.classList.remove("mosrear-texto")
    }
}
 


