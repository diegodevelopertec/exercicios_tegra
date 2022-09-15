const inputCNPJ=document.querySelector('#dado_cnpj')
const cxRes=document.querySelector('.estado')



document.querySelector('button').addEventListener('click',validarCNPJ)
document.querySelector('input').addEventListener('click',()=>{
    inputCNPJ.value=''
    cxRes.innerHTML='sem CPNJ'
})

function validarCNPJ() {

    let cnpj=inputCNPJ.value
if(cnpj){
   
    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
    var c = String(cnpj).replace(/[^\d]/g, '')

    if(c.length !== 14){
        cxRes.innerHTML='CNPJ inválido'
    }

    if(/0{14}/.test(c)){
        cxRes.innerHTML='CNPJ inválido'
    }

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
       if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n)){
          cxRes.innerHTML='CNPJ inválido' 
       }

       for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
        if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n)){
            cxRes.innerHTML='CNPJ inválido'
        }else{
            cxRes.innerHTML='CNPJ válido'
        }
}else{
    cxRes.innerHTML='Preencha com um CNPJ'
}
}


