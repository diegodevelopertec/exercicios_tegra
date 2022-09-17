const inputPrimeiraDistancia=document.querySelector('.primeira_distancia')
const inputSegundaDistancia=document.querySelector('.segunda_distancia')
const inputTerceiraDistancia=document.querySelector('.terceira_distancia')
const cxResultado=document.querySelector('.maior_distancia')


document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)


function calcular(){


    const  primeiroValor=inputPrimeiraDistancia.value
    const  segundoValor=inputSegundaDistancia.value
    const  terceiroValor=inputTerceiraDistancia.value

    parseFloat(primeiroValor)
    parseFloat(segundoValor)
    parseFloat(terceiroValor)

    if(primeiroValor && segundoValor && terceiroValor){
        cxResultado.innerHTML=Math.max.apply(null, [primeiroValor,segundoValor,terceiroValor]) 
    }else{
        alert('Preencha Todos os Campos!')
    }

}


function resetar(){
    inputPrimeiraDistancia.value=''
    inputSegundaDistancia.value=''
    inputTerceiraDistancia.value=''
    cxResultado.innerHTML='X'
}