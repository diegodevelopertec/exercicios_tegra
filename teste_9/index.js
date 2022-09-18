let segInput=document.querySelector('input')
const cxTemp=document.querySelector('.temp')


document.querySelector('.on').addEventListener('click',contarTempo)
document.querySelector('input').addEventListener('click',()=>{
    if(cxTemp.classList.contains('visivel')){
        cxTemp.classList.remove('visivel')
        cxTemp.classList.add('oculto')
        segInput.value=''
        cxTemp.innerHTML=''
    }
})


function contarTempo(){
    let seg=segInput.value
 
        if(parseInt(seg)){
        
            let hrs=seg / 3600
            let resto=seg % 3600
            let min=resto / 60
            let sec=resto % 60
            if(cxTemp.classList.contains('oculto')){
                cxTemp.classList.remove('oculto')
                cxTemp.classList.add('visivel')
                cxTemp.innerHTML=`${parseInt(hrs)}:${parseInt(min)}: ${parseInt(sec)}`
                cxTemp.style.display='flex'
    
            }
         
        }else{
          
            if(cxTemp.classList.contains('oculto')){
                cxTemp.classList.remove('oculto')
                cxTemp.classList.add('visivel')
                cxTemp.innerHTML='Preencha o campo'
            }
        }

}