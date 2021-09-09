const pendiente=document.querySelector("#pendiente-input");
const form=document.querySelector("#pendiente-form");

form.addEventListener("submit", (event)=>{
    alert("Pendiente Ingresado: "+pendiente.value);
});