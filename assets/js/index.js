let btn = document.querySelector("#btn");
imgP = document.querySelector("#imagePrincipal");
contador = 0;
btn.addEventListener("click", (e) => {
  if (contador == 0) {
    imgP.setAttribute("style", "border:2px solid red");
    contador = 1;
  } else {
    imgP.style.removeProperty("border");
    contador = 0;
  }
});
