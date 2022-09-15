const inputPrimeiroNumero=document.querySelector('#primeiro_numero')
const inputSegundoNumero=document.querySelector('#segundo_numero')
const cxResultado=document.querySelector('.resultado')

document.querySelector('button').addEventListener('click',calcular)



function calcular(){

    const primeiroNum=inputPrimeiroNumero.value
    const segundoNum=inputSegundoNumero.value
    if(parseInt(primeiroNum) && parseInt(segundoNum)){
            let soma = 0;
            for(let i=0;i <= segundoNum;i++){
                soma=soma + i            
            }
        
     cxResultado.innerHTML=soma
        cxResultado.style.display='flex'
    }else{
        alert('Preencha os campos')
    }
}


document.querySelectorAll('input').forEach(element => {


    element.addEventListener('click',()=>{
        cxResultado.style.display='none'
    })


}
)
