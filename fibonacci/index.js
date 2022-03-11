import Fibonacci from "./Fibonacci.js";
document.addEventListener("DOMContentLoaded", () => {
  const id = document.getElementById("num");
  const fibonacci = new Fibonacci(id);
  fibonacci.onKeyUp();
});
