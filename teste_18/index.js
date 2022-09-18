const radioCelsius=document.getElementById('CpF')
const radioFahrenheit=document.getElementById('FpC')
const temperaturaInput=document.getElementById('cx-temperatura')
const cxReposta=document.querySelector('.resposta')


document.querySelector('button').addEventListener('click',calcular)
document.querySelector('input[type="number"]').addEventListener('click',resetar)



function calcular(){
    if((radioCelsius.checked !== false || radioFahrenheit.checked !== false) && (temperaturaInput.value )){

        let temp=parseFloat(temperaturaInput.value)
      
          if(radioCelsius.checked===true){
               
                if(cxReposta.classList.contains('erro')  || cxReposta.classList.contains('oculto')){
                    cxReposta.classList.remove('oculto')
                    cxReposta.classList.remove('erro')
                    cxReposta.classList.add('visivel')
                    let tempRes=(1.8* temp) + 32
                    cxReposta.innerHTML=`Temperatura equivalente em Fahrenheit: <span>${tempRes.toFixed(2)}</span>`
                }
            }
      
      
          if(radioFahrenheit.checked ===true){
               
                if(cxReposta.classList.contains('erro')  || cxReposta.classList.contains('oculto')){
                    cxReposta.classList.remove('oculto')
                    cxReposta.classList.remove('erro')
                    cxReposta.classList.add('visivel')
                    let tempRes=(temp-32)*5/9 
                    cxReposta.innerHTML=`Temperatura equivalente em Celsius: :<span>${tempRes.toFixed(2)}</span>`
                }
               
          }
      
      }else{
         
         
          if(cxReposta.classList.contains('oculto')  || cxReposta.classList.contains('visivel')){
            cxReposta.classList.remove('oculto')
            cxReposta.classList.remove('visivel')
            cxReposta.classList.add('erro')
            cxReposta.innerHTML='Escolha a conversão e digite a Tempertura'
          }
      }
}


function resetar(){

    temperaturaInput.value=''
    if(cxReposta.classList.contains('erro')  || cxReposta.classList.contains('visivel')){
        cxReposta.classList.remove('erro')
        cxReposta.classList.remove('visivel')
        cxReposta.classList.add('oculto')
        
      }

}