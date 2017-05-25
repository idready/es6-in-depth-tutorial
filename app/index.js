console.log('Webpack greets YOU!');
let limit = 100;
console.info(limit);

/** CONSTANTS **/
// In ES6, const can't be reassign but the value can be modify if not assigning
const heros = ["Superman", "Batman", "DrStrange", "Hulk"];
console.info(heros);
// This will generate an error
// heros = [];
// But this will work since we are not assigning a value but modifying it with a method
heros.push("WonderWoman");
console.info(heros);
// This explains why an object or other data structures can be modify but not primary types


/** SCOPE **/

/* LET */
let limitNumber = 50;

{
  let limitNumber = 100;
  console.info(`Block scoped limitNumber: ${limitNumber}`);
}

console.info(`Global limitNumber: ${limitNumber}`);

/* CONST */
// Note: Const keyword also use block scope:
const limitNumberConst = 50;

{
  const limitNumberConst = 100;
  console.info(`Block scoped limitNumberConst: ${limitNumberConst}`);
}

console.info(`Global limitNumberConst: ${limitNumberConst}`);

/* VAR */
var limitNumberVar = 50;

{
  var limitNumberVar = 100;
  console.info(`Block scoped limitNumberVar: ${limitNumberVar}`);
}

console.info(`Global limitNumberVar: ${limitNumberVar}`);

// Block scoping works fine in function too

/** DESTRUCTURING && MORE (More: http://exploringjs.com/es6/ch_destructuring.html)**/


/* SPREAD OPERATOR */
let between = [5,6];
// Spread to have a complete count
let complete =  [1, 2, 3, 4, ...between, 7];
console.info(`Spread  ${complete}`);
// Spread parameter must always be the last
function collected(...args){
  console.log(args);
}

collected(1, 2, 'ES7', [1, 2, 3]);

/* DESTRUCTURING */
// Let see how we used to do before
let jungle = ['lion', 'zebra', 'jaguar'];
// let lion = jungle[0];
// let zebra = jungle[1];
// let jaquar = jungle[2];
// console.info(lion, zebra, jaquar);
// Same with ES6
let [zebra, lion, jaguar] = jungle;
console.info(lion, zebra, jaguar);
// Note: Order matters for an Array but in an Obect the index name is used instead
let king =  {name: 'Mufasa', kids: 2};
let {kids, name} = king;
console.info(kids, name);
// Note we can also change the new value name like below
let {kids: kd, name: kingName} = king;
console.info(kd, kingName);

// From: http://exploringjs.com/es6/ch_destructuring.html#_object-patterns-coerce-values-to-objects
//The object pattern coerces destructuring sources to objects before accessing properties. That means that it works with primitive values:

const {length : len} = 'abc'; // len = 3
const {toString: s} = 123; // s = Number.prototype.toString
// Which means above we are reaching [Value].prototype.[length/toString] properties on the prvovided value on the right side. 'abc'.prototype.length === 3 === len
console.info(`len ${len} and s ${s}`);
//Beware to block scope, it must be surrouned with parenthesis since statement can't start with curly braces
let son = {nameStr: 'Simba', parents: 2};
let nameStr, parents;
({nameStr, parents} = son);
console.info(nameStr, parents);


/** MODULES **/
import {Fellowship, TotalUsers} from './fellowship';
// Import default module no curly braces needed
// import Fellowship from './fellowship';

console.info(`Here are my fellows: ${Fellowship} and they are ${TotalUsers} of them`);


/** CLASSES **/
import Animal from './animal';
let leo = new Animal('King');
console.info(leo)
console.info(leo.hello());

/** CLOSURES **/
const budget = () => {

  //Private value
  let balance = 0;
  let changeBal = val => balance += val;

  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;

  //Factory
  return {
    // ES6 shortcut syntax
    deposit20, withdraw20, check
  }
}

let wallet = budget();
console.info(wallet);
console.info(wallet.check());
console.info(wallet.deposit20());
console.info(wallet.check());
console.info(wallet.withdraw20());
console.info(wallet.check());
console.info(wallet.deposit20());
