

const inputMedidaA=document.querySelector('.medida_a')
const inputMedidaB=document.querySelector('.medida_b')
const inputMedidaC=document.querySelector('.medida_c')
const cxResposta=document.querySelector('.res')
const cxQuadrado=document.querySelector('#cx_quadrado')
const cxTriangulo=document.querySelector('#cx_triangulo')
const cxTrapezio=document.querySelector('#cx_trapezio')


document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetar)


document.querySelectorAll('input').forEach(
    item=>{
        item.addEventListener('click',()=>{
         if( cxResposta.classList.contains('visivel'))
            cxResposta.classList.remove('visivel')
        })
    }
)




function  calcular(){


    const medidaA=inputMedidaA.value
    const medidaB=inputMedidaB.value
    const medidaC=inputMedidaC.value

    const areaQuadrado=parseFloat(medidaA) * 4
    const areaTriangulo=parseFloat(medidaA * medidaB  /2) 
    const areaTrapezio=parseFloat(medidaA + medidaB * medidaC )/2

    cxQuadrado.innerHTML=areaQuadrado.toFixed(4)
    cxTriangulo.innerHTML=areaTriangulo.toFixed(4)
    cxTrapezio.innerHTML=areaTrapezio.toFixed(4)

    cxResposta.classList.add('visivel')

}


function resetar(){
    cxResposta.classList.remove('visivel')
    inputMedidaA.value=''
    inputMedidaB.value=''
    inputMedidaC.value=''
}