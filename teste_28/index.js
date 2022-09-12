const n1=document.querySelector('#num_1')
const n2=document.querySelector('#num_2')
const n3=document.querySelector('#num_3')
const n4=document.querySelector('#num_4')
const n5=document.querySelector('#num_5')


document.querySelector('button').addEventListener('click',ordenar)
document.querySelector('.btn-reset').addEventListener('click',resetar)


function  ordenar(){


    const num1=n1.value
    const num2=n2.value
    const num3=n3.value
    const num4=n4.value
    const num5=n5.value

    let condicao=num1 && num2 && num3 && num4 && num5 
   if(condicao){
        let listaNumeros=[]
        listaNumeros.push(parseInt(num1))
        listaNumeros.push(parseInt(num2))
        listaNumeros.push(parseInt(num3))
        listaNumeros.push(parseInt(num4))
        listaNumeros.push(parseInt(num5))

    document.querySelector('.menor').innerHTML=Math.min.apply(null,listaNumeros) 
    document.querySelector('.maior').innerHTML=Math.max.apply(null,listaNumeros) 
   }else{
        alert('Preencha Todos os campos')
   }



}

function resetar(){
    n1.value=''
    n2.value=''
    n3.value=''
    n4.value=''
    n5.value=''
    document.querySelector('.menor').innerHTML='X'
    document.querySelector('.maior').innerHTML='Y'
}