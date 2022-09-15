const inputQdt=document.getElementById('qtd_glicose')
const cxResultado=document.querySelector('.resultado')
const cxRes=document.querySelector('.res')

document.querySelector('button').addEventListener('click',verificar)


function verificar(){
    const qdt=inputQdt.value
    if(qdt){
        if(parseFloat(qdt) <= 100 ){
            cxResultado.innerHTML='Normal' 
            cxRes.classList.remove('elevado')
            cxRes.classList.remove('diabetes')         
            cxRes.classList.add('normal')
            
        }else if(qdt >  100  || qdt <= 140){
            cxResultado.innerHTML='Elevado'          
            cxRes.classList.remove('normal')
            cxRes.classList.remove('diabetes')
            cxRes.classList.add('elevado')
              
            
        }else if(parseInt(qdt) >= 141 ){
            
            cxResultado.innerHTML='Diabetes' 
                if(  cxRes.classList.contains('normal') || cxRes.classList.remove('elevado')){
                    cxRes.classList.remove('normal')
                    cxRes.classList.remove('elevado')    
                    cxRes.classList.add('diabetes')
                }
                
        }
             
              
        
            
    

    }else{
        alert('Preencha o campo')



    }

  
}