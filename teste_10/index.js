
const inputPrimeiro=document.querySelector('.primeiro')
const inputSegundo=document.querySelector('.segundo')
const inputTerceiro=document.querySelector('.terceiro')
const cxResultado=document.querySelector('.menor')


document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)


function calcular(){

    const primeiroValor=inputPrimeiro.value
    const  segundoValor=inputSegundo.value
    const  terceiroValor=inputTerceiro.value

    parseInt(primeiroValor,segundoValor,terceiroValor)

    if(primeiroValor && segundoValor && terceiroValor){
        cxResultado.innerHTML=Math.min.apply(null, [primeiroValor,segundoValor,terceiroValor]) 
    }else{
        alert('Preencha Todos os Campos!')
    }

}


function resetar(){
    inputPrimeiro.value=''
    inputSegundo.value=''
    inputTerceiro.value=''
    cxResultado.innerHTML='X'
}