//exersice 2//

let btnTickets =  document.querySelector ('#btnTickets');
message =document.querySelector ('#message');
function tickets(){
ticketsValue= Number(document.querySelector('#value1').value)+
              Number(document.querySelector('#value2').value)+
              Number(document.querySelector('#value3').value);

if (ticketsValue == 0) {
    message.innerHTML= "no has seleccionado ningun sticker"
}
else if (ticketsValue >10) {
message.innerHTML= "llevas demasiado stickers"
}
else{
message.innerHTML= `llevas  ${ticketsValue} stickers`
   
}
}
btnTickets.addEventListener('click', tickets);