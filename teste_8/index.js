

const inputMedidaA=document.querySelector('.medida_a')
const inputMedidaB=document.querySelector('.medida_b')
const inputMedidaC=document.querySelector('.medida_c')
const cxResposta=document.querySelector('.res')



document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)


document.querySelectorAll('input').forEach(
  item=>item.addEventListener('click',resetar)
)




function  calcular(){
 

    const medidaA=inputMedidaA.value
    const medidaB=inputMedidaB.value
    const medidaC=inputMedidaC.value

    if(medidaA,medidaB,medidaC){
        parseFloat(medidaA,medidaB,medidaC)
        const areaQuadrado=medidaA * 4
        const areaTriangulo=(medidaA * medidaB)  /2
        const areaTrapezio=((medidaA + medidaB)  * medidaC) / 2.0
    
       
        if(cxResposta.classList.contains('oculto')){
            cxResposta.innerHTML=`
            <div>  ÀREA DO QUADRADO : <span > ${areaQuadrado.toFixed(4)} </span></div>
            <div>  ÁREA DO TRIÂNGULO : <span > ${areaTriangulo.toFixed(4)} </span></div>
            <div>  ÁREA DO TRAPÉZIO : <span > ${areaTrapezio.toFixed(4)} </span></div>
            
            
            `
            cxResposta.classList.remove('oculto')
            cxResposta.classList.add('visivel')
        }
    }else{
        if(cxResposta.classList.contains('oculto')){
            cxResposta.innerHTML='Preencha todos os campos'
            cxResposta.classList.remove('oculto')
            cxResposta.classList.add('visivel')
        }
    
    }

}


function resetar(){
   
   if(cxResposta.classList.contains('visivel')){
        inputMedidaA.value=''
        inputMedidaB.value=''
        inputMedidaC.value=''
        cxResposta.innerHTML=''
        cxResposta.classList.remove('visivel')
        cxResposta.classList.add('oculto')
       
   }
}