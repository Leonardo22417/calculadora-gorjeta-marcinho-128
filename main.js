let conta = 0
let pessoas = 0
let porcentagem = 0 
 
const containput = document.querySelector("#conta") 
   containput.addEventListener("input", receberValorconta) 
 
function receberValorconta(evento){
    conta = Number(evento.target.value)
}
 
const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input", receberQuantidadePessoas) 
 
function receberQuantidadePessoas(evento){
 const paragrafoErro = document.querySelector(".pessoas #erro")
 const divErro = document.querySelector(".pessoas .input-box") 
 
if(evento.target.value === "0"){
        paragrafoErro.style.display = "block"
        divErro.classList.add("erro-ativo")
} else {
        paragrafoErro.style.display = "none"
        divErro.classList.remove("erro-ativo")
        pessoas = Number(evento.target.value)
    }
}
 
const botoesgorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesgorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagemBotao) 
})
 
function receberPorcentagemBotao(evento){ 
    botoesgorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
            
        if(botao.value === evento.target.value){
            botao.classList.add("botao-ativo")
        } 
    })

    if(evento.target.value !== ""){
        porcentagem = parseFloat(evento.target.value) / 100
    }else {
        porcentagem = 0
    }
}
    
    console.log(porcentagem)

const gorjetaInput = document.querySelector("#outra")
 gorjetaInput.addEventListener("input", receberPorcentagemBotao)