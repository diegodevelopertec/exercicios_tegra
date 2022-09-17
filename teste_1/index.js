
//variaveis
let inputLargura=document.querySelector('#largura')
let inputComprimento=document.querySelector('#comprimento')
let inputValorMetro=document.querySelector('#valormetro')
let resArea=document.querySelector('#area')
let resPreco=document.querySelector('#preco')
let botaoCalculo=document.querySelector('button')
let botaoReset=document.querySelector('.btn-reset')




//Eventos
botaoCalculo.addEventListener('click',()=>Calculo())
botaoReset.addEventListener('click',()=>resetDados())



//Funções
const Calculo=()=>{
    let largura=inputLargura.value
    let comprimento=inputComprimento.value
    let valorMetro=inputValorMetro.value

    inputComprimento.value=''
    inputLargura.value=''
    inputValorMetro.value=''
    if(largura && comprimento && valorMetro){
              let areaTerreno=parseInt(largura * comprimento).toFixed(2)
              let precoTerreno=parseInt(valorMetro) * areaTerreno

         
            resArea.innerHTML=areaTerreno
            resPreco.innerHTML=precoTerreno.toFixed(2)

    }else{
        alert('campos vazios')
    }

}


const resetDados=()=>{
    resArea.innerHTML='00'
    resPreco.innerHTML='00'
}


