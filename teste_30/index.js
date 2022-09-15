const inputNumero=document.querySelector('#numero')
const cxRes=document.querySelector('.estado')



document.querySelector('button').addEventListener('click',escreverExtenso)
document.querySelector('input').addEventListener('click',()=>{
    inputNumero.value=''
    cxRes.innerHTML='sem número'
})

function escreverExtenso() {

let numero=inputNumero.value
if(numero){

   if(numero.length === 1 || numero.length === 2){
    var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
    var especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
    var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
 
    
    //Valores com 1 algarismo
    if(numero.length === 1) {
        //Imprimir unidadades
        cxRes.innerHTML=unidades[parseInt(numero[0])]
    }	

    //Valores com 2 algarismos
    else if(numero.length === 2) {
        //Especiais
        if((numero[0]=='1') && (numero[1]=='0'||numero[1]=='1'||numero[1]=='2'||numero[1]=='3'||numero[1]=='4'||numero[1]=='5'||numero[1]=='6'||numero[1]=='7'||numero[1]=='8'||numero[1]=='9')) {
            cxRes.innerHTML=especiais[parseInt(numero[1])]
        }
        
        //Dezenas
        else if((numero[0]=='2'||numero[0]=='3'||numero[0]=='4'||numero[0]=='5'||numero[0]=='6'||numero[0]=='7'||numero[0]=='8'||numero[0]=='9') && numero[1]=='0') {
            cxRes.innerHTML=dezenas[parseInt(numero[0]-2)]
        }
        else {
            cxRes.innerHTML=dezenas[parseInt(numero[0]-2)]+" e "+unidades[parseInt(numero[1])]
        }

    }
   }else{
        cxRes.innerHTML='O número deve ter um ou dois Digitos'
   }

}else{
    cxRes.innerHTML='Preencha com um número'
}
}


