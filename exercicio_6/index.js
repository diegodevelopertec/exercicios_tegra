const nomeInput=document.querySelector('.nome')
const valorHoraInput=document.querySelector('.valuehr')
const horasTrabalhadasInput=document.querySelector('.hr')
const cxValor=document.querySelector('.cx_valor')
const cxNome=document.querySelector('.cx_nome')
const cxRes=document.querySelector('.cx_res')


document.querySelector('button').addEventListener('click',calcular)

document.querySelector('.btn-reset').addEventListener('click',reset)


function calcular(){

const nome=nomeInput.value
const valorHora=valorHoraInput.value
const horasTrabalhadas=horasTrabalhadasInput.value


    let conditicao=nome && valorHora && horasTrabalhadas

    if(conditicao){

        parseFloat(valorHora)
        parseFloat(horasTrabalhadas)
        

        const resultado=valorHora * horasTrabalhadas
    cxNome.innerHTML=nome
    cxValor.innerHTML=resultado.toFixed(2)
      cxRes.style.display='block'
    }else{
        alert('Preencha Todos os Campos')
    }


}

function reset(){

    nomeInput.value=''
    valorHoraInput.value=''
    horasTrabalhadasInput.value=''
    cxValor.innerHTML='00.00'
    cxNome.value=''
    cxRes.style.display='none'


}