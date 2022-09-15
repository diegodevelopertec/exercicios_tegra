
const inputX=document.querySelector('input')
const cxRes=document.querySelector('.res')



document.querySelector('button').addEventListener('click',()=>{
  let valorX=inputX.value
    if(valorX){
        parseInt(valorX)
     
        for(i = 0 ; i <= valorX ; i++){
         let  pares=[]
            if( i % 2 === 0){
                pares.push(i)
                cxRes.innerHTML+=`
              <div> ${i} <hr> </div>
            `  
            }
           
        }
      
        cxRes.style.display='flex'
        inputX.value=''
      console.log(pares.slice())
       
    }
})


document.querySelector('input').addEventListener('click',()=>{
    cxRes.style.innerHTML=''
    cxRes.style.display='none'
    console.log(pares.slice(pares.length));

})