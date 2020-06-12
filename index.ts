const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape']

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  S = 'Short',
  T = 'Tall',
  G = 'Grande',
  V = 'Venti',
  Y = 100,
  A
}

const coffee = {
  hot: true,
  size: CoffeeSize.G
}

let type: any = true;
type = {};
let type2;
type2 = type;

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];
// union+literal
let clothSize: 'small' | 'medium' | 'large' = 'large';
type clothSize = 'small' | 'medium' | 'large';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}

function add(num1: number, num2: number): number {
  return num1 + num2
}

function hello(): undefined {
  console.log('Hello!');
  return;
}

function hello2(): void {
  console.log('Hello!');
  return;
}

const anotherAdd = (n1: number, n2: number): number => {
  return n1 + n2;
};

const doubleNumber1 = (number: number): number => number * 2;
const doubleNumber2: (number: number) => number = number => number * 2;
console.log(doubleNumber1(5));


function func_testA(num: number) { return num * num; }

const callback_funcA = (num: number, func_a) => {
  const output1 = num * func_a
  console.log(output1);
}

callback_funcA(5, func_testA(5));


const func_test = () => { console.log("func_test"); }

const callback_func = (num: number, func: () => void): void => {
  const output = num;
  func();
  console.log(output);
}

callback_func(5, func_test);
