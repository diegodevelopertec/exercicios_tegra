
const palavraInput=document.querySelector('#palavra')

document.querySelector('button').addEventListener('click',verificar)

function verificar(){

    let palavra= palavraInput.value
  if(palavra){
    let vogaisArray=['a','e','i','o','u']
    let vogais=0
    let consoantes=0
            for(let i=0;i < palavra.length;i++){
                if(vogaisArray.indexOf(palavra[i]) !== -1){
                    vogais++
                }else{
                    consoantes++
                }
                
            }
    document.querySelector('.res').style.display='flex'
    document.querySelector('.res').innerHTML=`
    <div>vogais : ${vogais}</div>
    <div>consoantes : ${consoantes} </div>`

  }else{
    document.querySelector('.res').style.display='flex'
    document.querySelector('.res').innerHTML=`<div>Preencha com uma palavra</div>`
  }
  
}

document.querySelector('input').addEventListener('click',()=>{
    document.querySelector('.res').style.display='none'
})