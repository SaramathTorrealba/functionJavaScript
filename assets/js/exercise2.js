//exersice 2//

let btnTickets = document.querySelector("#btnTickets");
message = document.querySelector("#message");
function tickets() {
  ticketsValue =
    Number(document.querySelector("#value1").value) +
    Number(document.querySelector("#value2").value) +
    Number(document.querySelector("#value3").value);
  let input1 = document.querySelector("#value1").value;
  let input2 = document.querySelector("#value2").value;
  let input3 = document.querySelector("#value3").value;
  if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
    message.innerHTML = "Sólo valores númericos";
  } else if (ticketsValue == 0) {
    message.innerHTML = "no has seleccionado ningun sticker";
  } else if (ticketsValue > 10) {
    message.innerHTML = "llevas demasiado stickers";
  } else {
    message.innerHTML = `llevas  ${ticketsValue} stickers`;
  }
}
btnTickets.addEventListener("click", tickets);
