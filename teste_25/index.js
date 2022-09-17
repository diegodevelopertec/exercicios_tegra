const diaInput=document.querySelector('#dia')
const mesInput=document.querySelector('#mes')
let cxRes=document.querySelector('.cx-res')

document.querySelector('button').addEventListener('click',verificar)

function verificar(){


    let dia=diaInput.value
    let mes=mesInput.value


    let dias=[18,19,20,21,22,23]
    let meses=[01,02,03,04,05,06,07,08,09,10,11,12]
    
    
    if((dia >=dia[3] && mes===meses[2]) || (dia <=dia[2] && mes===meses[4])){
        cxRes.innerHTML='Áries'
        cxRes.style.display='flex'


    }





        }