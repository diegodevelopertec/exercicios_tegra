let primeiraNotaInput=document.getElementById('nota_one')
let segundaNotaInput=document.getElementById('nota_two')
let containerRes=document.querySelector('.res')


document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)
document.querySelectorAll('input').forEach(inputClicado=>{
    inputClicado.addEventListener('click',autoReset)
})

containerRes.innerHTML='Adicione duas notas'

function calcular(){

    let nota1=primeiraNotaInput.value
    let nota2=segundaNotaInput.value

   
   if(nota1 && nota2){
    
    let notaFinal=parseFloat(parseFloat(nota1) + parseFloat(nota2)).toFixed(1)
   

            if(notaFinal < 60.00){
                containerRes.innerHTML=`<div id="cx-nota">Nota Final : <span id="nota">${notaFinal}</span></div>`
                containerRes.innerHTML+='<div id="cx-condicao">Condição  : <span id="condicao"> REPROVADO </span></div>'
                containerRes.classList.add('res-reprovado')
              
            }else{
                containerRes.innerHTML=`<div id="cx-nota">Nota Final : <span id="nota">${notaFinal}</span></div>`
                containerRes.innerHTML+='<div id="cx-condicao">Condição  : <span id="condicao"> APROVADO </span></div>'
                containerRes.classList.add('res-aprovado')
            }

   }else{
        containerRes.innerHTML='Preencha todos os campos'
        containerRes.classList.add('res-reprovado')
   }
}

function resetar(){
    primeiraNotaInput.value=''
    segundaNotaInput.value=''
   containerRes.innerHTML='Adicione duas notas'
    containerRes.classList.contains('res-reprovado') || containerRes.classList.contains('res-reprovado')  ? containerRes.classList.remove('res-reprovado') : containerRes.classList.remove('res-aprovado')
    
}


function autoReset(){

    if( containerRes.innerHTML='Preencha todos os campos'){
        containerRes.innerHTML='Adicione duas notas'
        containerRes.classList.remove('res-reprovado')
        containerRes.classList.remove('res-aprovado')
    }
  

}