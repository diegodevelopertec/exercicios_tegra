//variveis

const inputNameOne=document.querySelector('.input_nome1')
const inputNameTwo=document.querySelector('.input_nome2')

const inputAgeOne=document.querySelector('.input_idade1')
const inputAgeTwo=document.querySelector('.input_idade2')

const areaNameOne=document.querySelector('.nome_1')
const areaNameTwo=document.querySelector('.nome_2')
const areaAgeOne=document.querySelector('.idade_1')
const areaAgeTwo=document.querySelector('.idade_2')



//Eventos
document.querySelector('button').addEventListener('click',Calculate)
document.querySelector('.btn-reset').addEventListener('click',reset)



//Funções
function Calculate(){
    
   let  nameOne=inputNameOne.value
   let ageOne=inputAgeOne.value
   let nameTwo=inputNameTwo.value
   let ageTwo=inputAgeTwo.value



   parseInt(ageOne)
   parseInt(ageTwo)
   let condition=nameOne && ageOne && nameTwo && ageTwo
    
   if(condition){
   
    areaNameOne.innerHTML=nameOne
    areaAgeOne.innerHTML=ageOne
    areaNameTwo.innerHTML=nameTwo
    areaAgeTwo.innerHTML=ageTwo


   let mediaAges=(ageOne /2) + (ageTwo / 2) 
    document.querySelector('.media_nome_1').innerHTML=nameOne
    document.querySelector('.media_nome_2').innerHTML=nameTwo
    document.querySelector('.media_ages').innerHTML=mediaAges.toFixed(1)
    document.querySelector('.cx-res').style.display='block'

    }else{
        alert('Preencha Todos os campos correntamente')
    }

  
}


function reset(){
    inputNameOne.value=''
    inputAgeOne.value=''
    inputNameTwo.value=''
    inputAgeTwo.value=''

    
    areaNameOne.innerHTML=''
    areaAgeOne.innerHTML=''
    areaNameTwo.innerHTML=''
    areaAgeTwo.innerHTML=''

    document.querySelector('.media_nome_1').innerHTML='Pessoa_1'
    document.querySelector('.media_nome_2').innerHTML='Pessoa_2'
    document.querySelector('.media_ages').innerHTML='X'
    document.querySelector('.cx-res').style.display='none'

}



