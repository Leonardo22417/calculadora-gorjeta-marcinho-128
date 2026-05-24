let conta = 0
let pessoas = 0

const containput = document.querySelector(".containput")
   containput.addEventListener("input", )

function receberValorconta(evento){
    conta = Number(evento.target.value)
}

const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input", )

function receberQuantidadePessoas(evento){
 const paragrafoErro = document.querySelector(".pessoas #erro")

    if(evento.target.value === "0"){
        document.querySelector(".pessoas #erro")
        const divErro = document.querySelector(".pessoas .input-box")
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.removeAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}

const botoesgorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesgorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(){
    console.log(evento.target.value)
    porcentagem = Number(evento.target.value) / 100
    console.log(porcentagem)
}