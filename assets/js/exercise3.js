//exercise3//

let btn3 = document.querySelector("#btn3");

function selectClick() {
  let select1 = Number(
    document.querySelector("#price1").value +
      document.querySelector("#price2").value +
      document.querySelector("#price3").value
  );
  if (select1 === 911) {
    messageP = document.querySelector("#message3");
    messageP.innerHTML = "password 1 correcto";
  } else if (select1 === 714) {
    messageP = document.querySelector("#message3");
    messageP.innerHTML = "password 2 correcto";
  } else {
    messageP = document.querySelector("#message3");
    messageP.innerHTML = "password 3 incorrecto";
  }
}
btn3.addEventListener("click", selectClick);
