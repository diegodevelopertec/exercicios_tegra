let minutosGastosInput=document.getElementById('minutos')
let cxValorPagar=document.getElementById('valor')



document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)



function calcular(){

    let minutosGastos=minutosGastosInput.value

   if(minutosGastos){
    
        if(parseInt(minutosGastos) > 100){
            let valorDiferenca=parseInt(minutosGastos - 100)
            let valorPagar=parseInt(valorDiferenca * 2.00) + 50.00
            cxValorPagar.innerHTML=valorPagar.toFixed(2)
        }else{
            cxValorPagar.innerHTML='50.00'
        }
  
    


   }else{
    alert('Preencha o campo')
   }
}

function resetar(){

    minutosGastosInput.value=''
    cxValorPagar.innerHTML='00.00'
  
  
    
}


/*

plano=50=>100 minutos
exceder=>1 min=2.00
*/