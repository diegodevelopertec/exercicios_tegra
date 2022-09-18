const diaInput=document.querySelector('#dia')
const mesInput=document.querySelector('#mes')
let cxRes=document.querySelector('.res')

document.querySelector('button').addEventListener('click',verificar)
document.querySelectorAll('input').forEach(inputClicado=>{
 inputClicado.addEventListener('click',reset)
})

function verificar(){


    let dia=diaInput.value
    let mes=mesInput.value
    mesInput.value=''
    diaInput.value=''

    if(dia && mes){
        if((dia >= 21 && mes == 3)||(dia <=20 && mes == 4)){
            cxRes.innerHTML='Áries';
            cxRes.style.display='flex'
          }
          if((dia >= 24 && mes == 9)||(dia <= 23 && mes == 10)){
            cxRes.innerHTML='Libra';
          }
          if((dia >= 21 && mes == 4)||(dia <=21 && mes== 5)){
            cxRes.innerHTML='Touro';
            cxRes.style.display='flex'
          }
          if((dia >= 24 && mes == 10)||(dia <= 22 && mes == 11)){
            cxRes.innerHTML='Escorpião';
            cxRes.style.display='flex'
          }
          if((dia >= 22 && mes == 5)||(dia <= 21 && mes == 6)){
            cxRes.innerHTML='Gemeos';
            cxRes.style.display='flex'
          }
          if((dia >= 23 && mes == 11)||(dia <= 21 && mes == 12)){
          cxRes.innerHTML='Sagitário';
          cxRes.style.display='flex'
          }
          if((dia >= 21 && mes == 6)||(dia <= 23 && mes == 7)){
          cxRes.innerHTML='Cancer';
          cxRes.style.display='flex'
          }
          if((dia >= 22 && mes == 12)||(dia <= 20 && mes == 1)){
            cxRes.innerHTML='Capricornio';
            cxRes.style.display='flex'
          }
          if((dia >= 24 && mes == 7)||(dia <= 23 &&mes == 8)){
            cxRes.innerHTML='Leão';
            cxRes.style.display='flex'
          }
          if((dia >= 21 && mes == 1)||(dia <=19 && mes == 2)){
             cxRes.innerHTML='Aquário';
             cxRes.style.display='flex'
          }
          if((dia >= 24 && mes == 8)||(dia <=23 && mes == 9)){
            cxRes.innerHTML='Virgem';
            cxRes.style.display='flex'
          }
          if((dia >= 20 && mes ==2)||(dia <= 20 && mes == 3)){
             cxRes.innerHTML='Peixes';
             cxRes.style.display='flex'
          }
    }else{
        
        if(cxRes.style.display='none'){
            cxRes.style.display='flex'
            cxRes.innerHTML='Preencha os campos'
         }
    }

    



}

function reset(){
   
 if(cxRes.style.display='flex'){
    cxRes.style.display='none'
 
 }
}