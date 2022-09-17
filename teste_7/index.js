//Variaveis
const inputCombustivel=document.querySelector('#combustivel')
const inputDistancia=document.querySelector('#distancia')
const cxResultado=document.querySelector('.resultado')



//Eventos
document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)


//Funcoes
function calcular(){
    const combustivelGasto=inputCombustivel.value
    const  distanciaPercorrida=inputDistancia.value


    parseInt(distanciaPercorrida,combustivelGasto)
    
    if(combustivelGasto && distanciaPercorrida){

        let consumoMedio=distanciaPercorrida / combustivelGasto 
        cxResultado.innerHTML=consumoMedio.toFixed(3)


    }else{
        alert('Preencha Todos os Campos!')
    }

}


function resetar(){
    inputCombustivel.value=''
    inputDistancia.value=''
    cxResultado.innerHTML='X'

}