const numeroInput=document.querySelector('#numero')
const div=document.querySelector('.tabuada-container')



for(let i=1 ; i <= 10; i++){
    div.innerHTML+=`

                <div class="linha">
                    <span class="num"> ${i}</span>
                    <span class="sinal"> X </span>
                    <span class="num_receb">0</span> 
                    <span  class='sinal'> = </span>
                    <span class="res">0</span>
                </div>
    `
}


document.querySelector('.btn').addEventListener('click',()=>{


    const numero=numeroInput.value
    if(parseInt(numero)){
        div.innerHTML=''
            for(let i=1 ; i <= 10; i++){
                
                div.innerHTML+=`
            
                            <div class="linha">
                                <span class="num"> ${i}</span>
                                <span class="sinal"> X </span>
                                <span class="num_receb">${numero}</span>
                                <span  class='sinal'> = </span>
                                <span class="res">${i * numero} </span>
                            </div>
                        
    
                `
            }
            numeroInput.value=''
    }else{
        alert('Envie um numero')
    }




})

