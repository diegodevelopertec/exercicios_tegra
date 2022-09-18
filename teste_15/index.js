const inputQdt=document.getElementById('qtd_glicose')
const cxResultado=document.querySelector('.resultado')
const cxRes=document.querySelector('.res')

document.querySelector('button').addEventListener('click',verificar)
document.querySelector('input').addEventListener('click',resetar)

function verificar(){
    const qdt=inputQdt.value
   

    if(qdt){
      if(qdt < 100){
        cxRes.innerHTML='Normal'
        cxRes.classList.add('normal')
      }
      if(qdt >= 100  &&  qdt <= 140){
        cxRes.innerHTML='Elevado'
        cxRes.classList.add('elevado')
      }
      if(qdt > 140 ){
        cxRes.innerHTML='Diabetes'
        cxRes.classList.add('diabetes')
      }
}else{
    cxRes.innerHTML='Preencha o campo'
    cxRes.classList.add('diabetes')
}
  
}
 
function resetar(){

    cxRes.classList.remove('normal')
    cxRes.classList.remove('elevado')    
    cxRes.classList.remove('diabetes')
    inputQdt.value=''
    cxRes.innerHTML=''



}