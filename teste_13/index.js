let minutosGastosInput=document.getElementById('minutos')
let cxValorPagar=document.querySelector('.res')


cxValorPagar.innerHTML='<div>Valor á Pagar : R$<span id="valor"> 50,00 </span></div>'


document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)




function calcular(){

    let minutosGastos=minutosGastosInput.value

   if(minutosGastos){
    
        if(parseInt(minutosGastos) > 100){
            let valorDiferenca=parseInt(minutosGastos - 100)
            let valorPagar=parseInt(valorDiferenca * 2.00) + 50.00
            cxValorPagar.innerHTML=`<div>Valor á Pagar : R$ ${ valorPagar.toFixed(2)} </div>`
        }else{
            cxValorPagar.innerHTML=`<div>Valor á Pagar : R$ 50,00</div>`
          
        }
  

   }else{
     alert('Preencha o campo')
   }
}

function resetar(){

    minutosGastosInput.value=''
    cxValorPagar.innerHTML='<div>Valor á Pagar : R$ <span id="valor"> 50,00 </span></div>'


}

