//variaveis
const nomeInput=document.querySelector('.nome')
const valorHoraInput=document.querySelector('.valuehr')
const horasTrabalhadasInput=document.querySelector('.hr')
const cxRes=document.querySelector('.res')

//Eventos
document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',reset)

document.querySelectorAll('input').forEach(inputClicado => {
     
   inputClicado.addEventListener('click',()=>{
        if(cxRes.classList.contains('erro-msg') || cxRes.classList.contains('visivel')){
            autoReset()
        }
   })
})


function calcular(){

    const nome=nomeInput.value
    const valorHora=valorHoraInput.value
    const horasTrabalhadas=horasTrabalhadasInput.value


    let condicao=nome && valorHora && horasTrabalhadas

    if(condicao){
       parseFloat(valorHora,horasTrabalhadas)
       const resultado=valorHora * horasTrabalhadas

      if(cxRes.classList.contains('oculto' )){
            cxRes.classList.remove('oculto')
            cxRes.classList.add('visivel')
            cxRes.innerHTML=` O salário de  <span id='cx_name'>${nome}</span>   deve ser de  R$<span>${resultado.toFixed(2)}</span>`
       }


    }else{
        if(cxRes.classList.contains('oculto') || cxRes.classList.contains('visivel')){
            cxRes.classList.remove('oculto')
            cxRes.classList.remove('visivel')
            cxRes.classList.add('erro-msg')
            cxRes.innerHTML=`Preencha os campos`
        }

      
    }


}

function reset(){

    nomeInput.value=''
    valorHoraInput.value=''
    horasTrabalhadasInput.value=''
   
    if(cxRes.classList.contains('erro-msg') || cxRes.classList.contains('visivel')){
        cxRes.classList.remove('erro-msg')
        cxRes.classList.remove('visivel')
        cxRes.classList.add('oculto')
       
     }

}

function autoReset(){
 
    nomeInput.value=''
    valorHoraInput.value=''
    horasTrabalhadasInput.value=''
    cxRes.classList.remove('erro-msg')
    cxRes.classList.remove('visivel')
    cxRes.classList.add('oculto')
            
     
}