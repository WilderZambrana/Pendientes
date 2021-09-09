const pendiente=document.querySelector("#pendiente-input");
const tipoPendiente=document.querySelector("#tipo-pendiente")
const form=document.querySelector("#pendiente-form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let resPend=TypePend(tipoPendiente.value);
    alert("Pendiente Ingresado: "+pendiente.value+" [ "+resPend+" ]");
});

function TypePend(tipoPend){
    let res="";
    switch(tipoPend){
        case 'Work':
            res="Work";
            break;
        case 'Personal':
            res="Personal";
            break;
    }
    return res;
}