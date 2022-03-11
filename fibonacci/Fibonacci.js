export default class Fibonacci {
  constructor(id) {
    this.id = id;
    this.num = 0;
  }
  onKeyUp() {
    this.id.onkeyup = () => {
      console.log(this.id.value);
      console.log(`Fibonaccio: ${this.fibonacci(this.id.value)}`);
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
  render() {
    console.log(this.id);
  }
}
