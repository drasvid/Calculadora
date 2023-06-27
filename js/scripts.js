const keys=document.querySelectorAll('.keys button');

const add =document.querySelector('.add');
const saved =document.querySelector('.saved');

const suma=32+2;

console.log(typeof(suma))






keys.forEach(key=>{

    key.addEventListener('click', event=>{

        print(key);

    })
});



function print(key){

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

    operative()

};


function operative(){

    const igual=document.querySelector('.igual');
    const valor=saved.textContent;

    igual.addEventListener('click',()=>{

    parseInt(valor,10)
    
    console.log(typeof(valor))


    })




}
