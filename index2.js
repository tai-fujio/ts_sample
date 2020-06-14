var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["S"] = "Short";
    CoffeeSize["T"] = "Tall";
    CoffeeSize["G"] = "Grande";
    CoffeeSize["V"] = "Venti";
    CoffeeSize[CoffeeSize["Y"] = 100] = "Y";
    CoffeeSize[CoffeeSize["A"] = 101] = "A";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.G
};
var magical = true;
magical = {};
// magical.magical = "MAGICAL";
var magical2;
magical2 = magical;
var unionType = 10;
var unionTypes = [21, 'hello'];
// union+literal
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function hello() {
    console.log('Hello!');
    return;
}
function hello2() {
    console.log('Hello!');
    return;
}
var anotherAdd = function (n1, n2) {
    return n1 + n2;
};
var doubleNumber1 = function (number) { return number * 2; };
var doubleNumber2 = function (number) { return number * 2; };
console.log(doubleNumber1(5));
function func_testA(num) { return num * num; }
var callback_funcA = function (num, func_a) {
    var output1 = num * func_a;
    console.log(output1);
};
callback_funcA(5, func_testA(5));
var func_test = function () { console.log("1250"); };
var callback_func = function (num, func) {
    var output = num;
    func();
    console.log(output);
};
callback_func(5, func_test);
