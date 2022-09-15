
const palavraInput=document.querySelector('#palavra')

document.querySelector('button').addEventListener('click',verificar)

function verificar(){

 let palavra= palavraInput.value
  if(palavra){
       const reverso=palavra.split('').reverse().join('')

        if(palavra === reverso){
            document.querySelector('.res').style.display='flex'
            document.querySelector('.res').innerHTML=`<div>A palavra ${palavra} é palíndromo </div>`
        }else{
            document.querySelector('.res').style.display='flex'
            document.querySelector('.res').innerHTML=`<div>A palavra ${palavra} não é palíndromo </div>`
        }
  }else{
    document.querySelector('.res').style.display='flex'
    document.querySelector('.res').innerHTML=`<div>Preencha com uma palavra</div>`
  }
  
}

document.querySelector('input').addEventListener('click',()=>{
    document.querySelector('.res').style.display='none'
})