const lampada = document.querySelector("#lampada");
const status = document.querySelector("#status");
const botao = document.querySelector("#botao");

let ligada = false;

botao.addEventListener("click", () =>  {
    ligada = !ligada;
    lampada.classList.toggle("apagada");

    if (ligada){
        status.textcontent = "a lampada esta apagada";
        botao.textContent = "desligar";
    } else {
        status.textContent = "a lampada esta apagada";
        botao.textContent = "ligar";
}
});