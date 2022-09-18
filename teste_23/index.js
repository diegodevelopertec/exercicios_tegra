const inputPrimeiroNumero=document.querySelector('#primeiro_numero')
const inputSegundoNumero=document.querySelector('#segundo_numero')
const cxResultado=document.querySelector('.resultado')

document.querySelector('button').addEventListener('click',calcular)
document.querySelectorAll('input').forEach(element => {
    element.addEventListener('click',()=>{
        cxResultado.style.display='none'
    })
   }
)



function calcular(){

   let  primeiroNum=inputPrimeiroNumero.value
   let segundoNum=inputSegundoNumero.value
    
   if(primeiroNum && segundoNum){
    parseInt(primeiroNum,segundoNum)
     let soma=0
     for(i=0;i < segundoNum ;i++){
        if( i % 2 === 1){
            soma +=soma+1
            cxResultado.innerHTML=`SOMA DOS ÌMPARES= ${soma}`
        }
     }
        cxResultado.style.display='flex'
    }else{
       cxResultado.innerHTML='Preencha os campos'
        cxResultado.style.display='flex'
    }
}


