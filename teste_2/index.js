

let inputBase=document.getElementById('base')
let inputAltura=document.getElementById('altura')
let resArea=document.getElementById('area_id')
let resDiagonal=document.getElementById('diagonal_id')
let resPerimetro=document.getElementById('perimetro_id')



document.querySelector('button').addEventListener('click',calcular)
document.querySelector('.btn-reset').addEventListener('click',resetDados)



function calcular(){
    let base=inputBase.value
    let altura=inputAltura.value
    inputBase.value=''
    inputAltura.value=''

    if(base && altura){


        


        let areaRetangulo=parseFloat(base * altura)
        let areaPerimetro=parseFloat(base * 2 + altura * 2)


        let ponteciaBase=Math.pow(parseFloat(base),2)
        let potenciaAltura=Math.pow(parseFloat(altura),2)
        let somaPotencias=potenciaAltura + ponteciaBase
        let diagonal=Math.sqrt(somaPotencias)

        let areaDiagonal=diagonal

        resArea.innerHTML=areaRetangulo.toFixed(4)
        resPerimetro.innerHTML=areaPerimetro.toFixed(4)
        resDiagonal.innerHTML=areaDiagonal.toFixed(4)

    }else{
        alert('Todos os campos devem ser preenchidos')
    }


}



function resetDados(){
    resArea.innerHTML='00'
    resPerimetro.innerHTML='00'
    resDiagonal.innerHTML='00'


}