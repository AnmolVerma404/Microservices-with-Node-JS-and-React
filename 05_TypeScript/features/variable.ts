let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//Build in Object
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNum: number[] = [1, 2, 3];
let truth: boolean[] = [true, false, false];

//Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use type annotation
// 1) Function that return any type
const json = '{"x":10,"y":20}';
const cord: { x: number; y: number } = JSON.parse(json);
console.log(cord);
// 2) Declare a var in one line and initilize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; ++i) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
// 3) Var whose type can't be inferred correctly
let numbers = [-10, -1, 12];
let numAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i];
  }
}