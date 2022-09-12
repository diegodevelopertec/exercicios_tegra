let primeiroNumeroInput=document.getElementById('nota_one')
let segundoNumeroInput=document.getElementById('nota_two')
let cxResposta=document.getElementById('resposta')

document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)



function calcular(){

    let primeiroNumero=primeiroNumeroInput.value
    let segundoNumero=segundoNumeroInput.value

   
   if(primeiroNumero && segundoNumero){
       parseInt(primeiroNumero,segundoNumero)
    

       function multi(n1,n2){
            if(n1 > n2){
                if(n1 / n2 === 0){
                 for(i=0;i< n1; i++){
                    if( i  %  n2){
                        cxResposta.innerHTML='São Múltiplos'
                    }else{
                        cxResposta.innerHTML-'Não são Múltiplos'
                    }
                 }
                }

            }else{
                if(n2 / n1 === 0){
                    cxResposta.innerHTML='São Múltiplos'
                }else{
                    cxResposta.innerHTML='Não são Múltiplos'
                }
            }




       }

       multi(parseInt(primeiroNumero),parseInt(segundoNumero))
   }else{
    alert('Preencha Todos os campos')


   }


}

function resetar(){

    primeiroNumeroInput.value=''
    segundoNumeroInput.value=''
   cxResposta.innerHTML='X'
   
    
}
