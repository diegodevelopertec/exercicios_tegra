//Variaveis
const raio=document.getElementById('raio')
const cxRes=document.querySelector('.res')



//Eventos
document.querySelector('button').addEventListener('click',calcular)
document.querySelector('input').addEventListener('click',resetar)


//Funcoes
function calcular(){

    if(raio.value){
      let area=3.14159 *( Math.pow(raio.value,2))
      cxRes.innerHTML=area.toFixed(3)
      cxRes.classList.add('resultado')
    }else{
         
      cxRes.classList.contains('oculto') || cxRes.classList.contains('resultado') ? cxRes.classList.remove('oculto') : cxRes.classList.remove('resultado')
      cxRes.innerHTML='Preencha o campo'
      cxRes.classList.add('erro')
   }
        
   
}

function resetar(){
   
      if(cxRes.classList.contains('erro')  || cxRes.classList.contains('resultado')){
       cxRes.classList.remove('erro')
       cxRes.classList.remove('resultado')
       cxRes.classList.add('oculto')
      }
   
}