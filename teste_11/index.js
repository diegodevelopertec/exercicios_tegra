let primeiraNotaInput=document.getElementById('nota_one')
let segundaNotaInput=document.getElementById('nota_two')
let cxCondicao=document.getElementById('condicao')
let cxNotaFinal=document.getElementById('nota')
let containerRes=document.querySelector('.res')
document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)



function calcular(){

    let nota1=primeiraNotaInput.value
    let nota2=segundaNotaInput.value

   
   if(nota1 && nota2){
    
    let notaFinal=parseFloat(parseFloat(nota1) + parseFloat(nota2)).toFixed(1)
    cxNotaFinal.innerHTML=notaFinal
            if(notaFinal < 60.00){
                cxCondicao.innerHTML='REPROVADO'
                containerRes.classList.add('res-reprovado')
            }else{
                cxCondicao.innerHTML='APROVADO'
                containerRes.classList.add('res-aprovado')
            }


   }else{
    alert('Preencha Todos os campos')


   }
}

function resetar(){

    primeiraNotaInput.value=''
    segundaNotaInput.value=''
    cxCondicao.innerHTML='Y'
    cxNotaFinal.innerHTML='X'
    containerRes.classList.contains('res-reprovado') || containerRes.classList.contains('res-reprovado')  ? containerRes.classList.remove('res-reprovado') : containerRes.classList.remove('res-aprovado')
    
}
