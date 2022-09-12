const inputQdt=document.querySelector('#qdt')
const inputRecebido=document.querySelector('#recebido')
const inputPreco=document.querySelector('#preco')
const troco=document.querySelector('.troco')
const cxMessage=document.querySelector('.message-error')
const cxRes=document.querySelector('.res')


document.querySelector('button').addEventListener('click',Calcular)
document.querySelector('.btn-reset').addEventListener('click',Resetar)
document.querySelectorAll('.input').forEach(item=>{
    item.addEventListener('click',removeError)

})


function Calcular(){
    
    let qdt= inputQdt.value
    let preco=inputPreco.value
    let recebido=inputRecebido.value


    parseInt(qdt)
    parseFloat(preco)
    parseFloat(recebido)


    let condicao=qdt && preco && recebido
    
        if(condicao){
            if(parseFloat(recebido) <  parseFloat(preco * qdt)){
                let valorTotal=parseFloat(preco * qdt)
                cxMessage.classList.add('visivel')
                cxMessage.innerHTML=` DINHEIRO INSUFICIENTE. FALTAM R$ ${(valorTotal - recebido).toFixed(2)} REAIS`
            }else{
                let resultado = parseFloat(recebido) - parseFloat(preco * qdt) 
                troco.innerHTML=`R$ ${resultado.toFixed(2)}`
                cxRes.classList.add('visivel')

            }

        }else{
           cxMessage.classList.add('visivel')
           cxMessage.innerHTML='Preencha todos os campos'
           cxRes.classList.remove('visivel')
        

        }

}


function removeError(){
    cxMessage.classList.remove('visivel')
}

function Resetar(){
    inputQdt.value=''
    inputRecebido.value=''
    inputPreco.value=''
    troco.innerHTML='00.00'
    cxRes.classList.remove('visivel')
    cxMessage.classList.remove('visivel')


}