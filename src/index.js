const elemento = document.querySelector("[name=user-input]");

console.log(elemento);

// const element = document.getElementById("reset-button");

// console.log(element);

// const element = document.getElementsByName("user-input")

const element = document.getElementById("reset-button");

console.log(element);

elemento.addEventListener("input", function () {
  console.log("michi");
});

element.addEventListener("click", function () {
  elemento.value = "";
});
