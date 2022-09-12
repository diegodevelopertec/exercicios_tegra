const salarioInput=document.querySelector('#salario')
const cxNovoSalario=document.querySelector('.salario_novo')
const cxPorcentagem=document.querySelector('.porcentagem')
const cxAumento=document.querySelector('.aumento')


document.querySelector('button').addEventListener('click',verificar)


function verificar(){

    const salario=salarioInput.value
    if( salario ){
        if(parseFloat(salario) <= 999){
            const aumento=parseFloat(salario * 20 /100 )
            const salarioNovo=aumento + parseFloat(salario)

            cxNovoSalario.innerHTML=`R$ ${salarioNovo.toFixed(2)}`
            cxAumento.innerHTML=`R$ ${aumento.toFixed(2)}`
            cxPorcentagem.innerHTML='20%'

        }else if((parseFloat(salario) >=1000) && (parseFloat(salario) <= 2999)){
           
           
            const aumento=parseFloat(salario * 15 /100 )
            const salarioNovo=aumento + parseFloat(salario)

            cxNovoSalario.innerHTML=`R$ ${salarioNovo.toFixed(2)}`
            cxAumento.innerHTML=`R$ ${aumento.toFixed(2)}`
            cxPorcentagem.innerHTML='15%'


        }else if((parseFloat(salario) >=3000) &&  (parseFloat(salario) <= 7999)){
          
             const aumento=parseFloat(salario * 10 /100 )
            const salarioNovo=aumento + parseFloat(salario)

            cxNovoSalario.innerHTML=`R$ ${salarioNovo.toFixed(2)}`
            cxAumento.innerHTML=aumento.toFixed(2)
            cxPorcentagem.innerHTML='10%'

        }else{
           
            const aumento=parseFloat(salario * 5 /100 )
            const salarioNovo=aumento + parseFloat(salario)

            cxNovoSalario.innerHTML=`R$ ${salarioNovo.toFixed(2)}`
            cxAumento.innerHTML=`R$ ${aumento.toFixed(2)}`
            cxPorcentagem.innerHTML='5%'
        }
    }


}