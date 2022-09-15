const diaInput=document.querySelector('#dia')
const mesInput=document.querySelector('#mes')


document.querySelector('button').addEventListener('click',verificar)

function verificar(){


  
    let dia=diaInput.value
    let mes=mesInput.value


    let meses=[01,02,03,04,05,06,07,08,09,10,11,12]
    let dias=[18,19,20,21,22,23]

    if(parseInt(dia) &&  parseInt(mes)){
        if((dia >= dias[3] && mes === meses[2]) || (dia <= dias[3] && mes === meses[3])){
                alert('Áries')
        }
    }
}









    /*
    if(parseInt(dia) &&  parseInt(mes)){
            if((dia >= 21 && mes === 01)   ||   (dia <= 18 && mes === 02) ){
                    alert('Aquário')
            }else if((dia >= 19 && mes === 02) || (dia <= 20 && mes === 03)){
                alert('Peixes')
            }else if((dia >= 21 && mes === 03)  || (dia <= 20 && mes === 04)){
                alert('Áries:')
            }
            else if((dia >= 21 && mes === 04) || (dia <= 21 && mes === 05)){
                alert('touro:')
            }
            else if((dia >= 21 && mes === 05) ||  (dia <= 20 && mes === 06)){
                alert('gemeos')
            } else if((dia >= 21 && mes === 05) ||  (dia <= 20 && mes === 06)){
                alert('gemeos')
            } else if((dia >= 21 && mes === 06) || (dia <= 22 && mes === 07)){
                alert('cancer')
            }
            else if((dia >= 23 && mes === 07) ||  (dia <= 20 && mes === 08)){
                alert('leao')
            }
            else if((dia >= 23 && mes === 08) || (dia <= 22 && mes === 09)){
                alert('virgem')
            }
            else if((dia >= 23 && mes === 09) ||  (dia <= 22 && mes === 10)){
                alert('libras')
            }
            else if((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)){
                alert('escorpiao')
            }
            else if((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)){
                alert('Sagitário')
            }else if((dia >= 22 && mes ===12) || ( dia <= 20 && mes === 01)){
                alert('Capricórnio')
            }
*/


    






