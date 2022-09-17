let primeiroNumeroInput=document.getElementById('nota_one')
let segundoNumeroInput=document.getElementById('nota_two')
let cxResposta=document.getElementById('resposta')

document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)



function calcular(){


    const primeiraNota=primeiroNumeroInput.value
    const segundaNota=segundoNumeroInput.value

    if(parseInt(primeiraNota) && parseInt(segundaNota)){

            if( primeiraNota %  segundaNota === 0 || segundaNota % primeiraNota === 0){
                    cxResposta.innerHTML='São multiplos'
            }else{
                cxResposta.innerHTML='Não são multiplos'
            }

   }else{
   alert('Preencha Todos os campos')
  }

}



function resetar(){

    primeiroNumeroInput.value=''
    segundoNumeroInput.value=''
   cxResposta.innerHTML='X'
   
    
}
