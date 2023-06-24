const keys=document.querySelectorAll('.keys button');

const add =document.querySelector('.add');
const saved =document.querySelector('.saved');




keys.forEach(key=>{

    key.addEventListener('click', event=>{

            const key_contend=key.innerHTML;

            if (key_contend==='AC') {

                add.textContent=0;
                saved.textContent='';          
                
            }
            else{

            add.textContent=key_contend;

            saved.textContent=saved.textContent+add.textContent;

            add.textContent='';

            }

        const qw=console.log(+saved.textContent)

        console.log(typeof(qw))

    })


});






