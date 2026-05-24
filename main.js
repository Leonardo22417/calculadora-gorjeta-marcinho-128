let conta = 0
let pessoas = 0
let porcentagem = 0 
 
const containput = document.querySelector("#conta") 
   containput.addEventListener("input", receberValorconta) 
 
function receberValorconta(evento){
    conta = Number(evento.target.value)
    calcular()
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
    calcular()
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
    
    calcular()

const gorjetaInput = document.querySelector("#outra")
 gorjetaInput.addEventListener("input", receberPorcentagemBotao)

 function calcular(){
    if(conta != 0 && porcentagem !== 0 && pessoas !== 0){
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = 'R$' + (conta * porcentagem / pessoas).toFixed(2)

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = 'R$' +( (conta + (conta * porcentagem)) / pessoas).toFixed(2)
    }
 }

 const botaoLimpar = document.querySelector(".resultados button")
 botaoLimpar.addEventListener("click", Limpar)

 function Limpar(){
    containput.value = ""

    botoesgorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
 })

gorjetaInput.value = ""

pessoasinput.value = ""

document.querySelector(".gorjeta-total > strong").innerHTML ="R$ 0.00"
document.querySelector(".total > strong").innerHTML = "R$ 0.00"
}