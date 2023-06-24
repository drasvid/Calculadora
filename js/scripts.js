const keys=document.querySelectorAll('.keys button');

const add =document.querySelector('.add');
const saved =document.querySelector('.saved');



keys.forEach(key=>{

    key.addEventListener('click', event=>{

            const key_contend=key.innerHTML;


            console.log(add);

            if (key_contend==='AC') {

                add.textContent=0;
                saved.textContent='';          
                
            }
            else{

            add.textContent=key_contend;

            saved.textContent=saved.textContent+add.textContent;

            add.textContent='';

            }
    })


});


