
//VARIAVEIS
const inputQdt=document.querySelector('#qdt')
const inputRecebido=document.querySelector('#recebido')
const inputPreco=document.querySelector('#preco')
const troco=document.querySelector('.troco')



//EVENTOS
document.querySelector('button').addEventListener('click',Calcular)
document.querySelector('.btn-reset').addEventListener('click',Resetar)



//fUNCOES
function Calcular(){
    
    let qdt= inputQdt.value
    let preco=inputPreco.value
    let recebido=inputRecebido.value


    parseInt(qdt,preco,qdt)
    let condicao=qdt && preco && recebido
    
     if(condicao){
            let resultado= recebido - (preco * qdt) 
            troco.innerHTML=`${resultado.toFixed(2)}`
     }else{
            alert('Preencha Todos os campos')
    }

}

function Resetar(){
    inputQdt.value=''
    inputRecebido.value=''
    inputPreco.value=''
    troco.innerHTML='00.00'




}