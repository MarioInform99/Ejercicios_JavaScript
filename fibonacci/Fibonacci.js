export default class Fibonacci {
  constructor(id) {
    this.id = id;
    this.text = document.getElementById("render");
    this.num = 0;
  }
  onKeyUp() {
    this.id.onkeyup = () => {
      this.render(this.id.value);
    };
  }
  fibonacci(num) {
    //Creamos unas constante
    let fibo = [0, 1];
    //iteramos hasta la posicion 2
    for (let index = 2; index <= num; index++) {
      //Restamos el numero que tengamos del anterior
      fibo[index] = fibo[index - 1] + fibo[index - 2];
    }
    return fibo[num];
  }
  render(num) {
    let fibo = this.fibonacci(num);
    this.text.innerText = `0, 1`;
    let suma = [0, 1];
    for (let i = 2; i <= num; i++) {
      suma[i] = suma[i - 1] + suma[i - 2];
      this.text.innerText += `, ${suma[i]}`;
    }
  }
}
