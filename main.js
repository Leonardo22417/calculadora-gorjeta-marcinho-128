let conta = 0
let pessoas = 0

const containput = document.querySelector(".containput")
   containput.addEventListener("input", )

function receberValorconta(evento){
    console.log("evento.target.value")
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