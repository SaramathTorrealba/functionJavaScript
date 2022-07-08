let btn = document.querySelector("#btn");
let imgP = document.querySelector("#imagePrincipal");
let counter = 0;
btn.addEventListener("click", (e) => {
  if (counter == 0) {
    imgP.setAttribute("style", "border:2px solid red");
    counter = 1;
  } else {
    imgP.style.removeProperty("border");
    counter = 0;
  }
});
