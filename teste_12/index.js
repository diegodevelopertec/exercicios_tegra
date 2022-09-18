let inputCoeA=document.querySelector('#coeA')
let inputCoeB=document.querySelector('#coeB')
let inputCoeC=document.querySelector('#coeC')
let cxRes=document.querySelector('.res')

document.querySelector('button').addEventListener('click',calcular)
document.querySelectorAll('input').forEach(inputClicado=>{

    inputClicado.addEventListener('click',resetar)
}
)

function calcular(){


    let coeA=inputCoeA.value
    let coeB=inputCoeB.value
    let coeC=inputCoeC.value

 if(coeA && coeB && coeC){
    parseInt(coeA,coeB,coeC)

        let delta=coeB ** 2 - (4 * coeA * coeC)

            if(delta < 0){
                
                    if(cxRes.classList.contains('oculto') ){
                        cxRes.classList.remove('oculto')
                        cxRes.classList.add('visivel')
                        cxRes.innerHTML='Não há raizes reais'
                    }

            }else if(delta > 0){
                let res1=(-coeB + Math.sqrt(delta))/(2 * coeA)
                let res2=(-coeB - Math.sqrt(delta))/(2 * coeA)
                    if(cxRes.classList.contains('oculto') ){
                    
                        cxRes.classList.remove('oculto')
                        cxRes.classList.add('visivel')
                        cxRes.innerHTML=`<div>X1 = ${res1.toFixed(4)} </div><div>X2 = ${res2.toFixed(4)}</div>`
                    }
        }else{
              
                if(cxRes.classList.contains('oculto') ){
                    cxRes.classList.remove('oculto')
                    cxRes.classList.add('visivel')
                    let res= (-coeB) /(2 * coeA)
                    cxRes.innerHTML=`A raiz da equação da ${res}`
                }
        }






    





 }else{
    if(cxRes.classList.contains('oculto') ){
        cxRes.classList.remove('oculto')
        cxRes.classList.add('visivel')
        cxRes.innerHTML='Preencha todos os campos'
    }
 }

}

function resetar(){
    if(cxRes.classList.contains('visivel') ){
        cxRes.classList.remove('visivel')
        cxRes.classList.add('oculto')
        inputCoeA.value=''
        inputCoeB.value=''
        inputCoeC.value=''


    }
}