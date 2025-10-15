// let score = '100';

// console.log(score);
// console.log(typeof(score));

// newVal = Number(score);
// console.log(typeof(newVal));

// *********** stack & heap ***********/

// stack - memory allocation for primitive data types(like number, string, boolean, null, undefined, symbol)
// heap - memory allocation for reference data types (like object, array, function)

// let userOne = {
//     name: 'Naeem Sarker',
//     age: 22,
// }

// let userTwo = userOne;

// userTwo.name = 'Nafiz Sarker';
// userTwo.age = 12;

// console.log(userOne.name);
// console.log(userTwo.name);

//********** string in js ************/

// const name = 'Naeem';
// const age = 22;

// console.log(`hey hello, this is ${name} Sarker and i am ${age} years old`);
// console.log(name.length);
// console.log(name[4]);
// console.log(name.indexOf(('a')));

//******** normal prac ******//

// let sum = 0;
// for(let i=9; i>0; i--){
//     console.log(i);
//     sum += i;
// }
// console.log('sum: ',sum);

//**********num & maths *//

// const score = 100;
// console.log(score + 1);

// const balance = new Number(500);
// console.log(balance+1);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const nums = 123.7899;
// console.log(nums.toPrecision(5));

// const num = 12.745456;  //floor, ceilling
// console.log(Math.round(num));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));

// const usd = 10000000;
// console.log(usd.toLocaleString('en-BD'));

//********** date & time *//

// let newDate = new Date();
// console.log(newDate);
// console.log(" hello !!!");

//********** if else **********//

// let color = 'green';

// if(color === 'red'){
//     console.log('stop');
//     }else if(color === "yellow"){
//         console.log('go slowly');
//     }else{
//         console.log('go');
//     }

//  function check(age){
//   if(age>18){
//     console.log("allow");
//   }else{
//     console.log("not allow");
//   }
//  }
// check(19);

//******** modern */
// let check = (age) =>{
//   if(age>18) return "allow";
//   return "not allow"
// }

// let check = age => age > 18 ? "allow" : "not allow";
// console.log(check(17));

//********** switch */

// alert("welcome to trafic lighting system : ");
// let color = prompt("enter a color : ");

// let color = 'red';

// switch(color){

//     case "red" :
//     console.log("stop");
//     break;
//     case "yellow" :
//     console.log("slow");
//     break;
//     case "green" :
//     console.log("go");
//     break;
//     default:
//         console.log("broken light");
// }

//*********** ARRAY ********/

// const arr = [1,2,3,4,5,6];
// console.log(arr[4]);

// arr.push(7);
// arr.pop();
// arr.push(8)
// console.log(arr[6]);

// console.log(arr);

// let newArr = arr.join();  //join() is conterting array into string
// console.log(newArr);
// console.log(typeof newArr);

// ****************** OBJECT *******************

// const user = {
//     name : "Naeem",
//     age : 23,
//     address : "uttara",
//     phone : 1629753788,
//     email : "naeem@gmail.com",
// }
// console.log(user);
// console.log("Name : ",user.name , "\nage : ",user.age, "\nadress : ",user.address, "\nphone : ",user.phone, "\nemail : ",user.email);

//better->
// console.log(`Name : ${user.name} \nAge : ${user.age} \naddress : ${user.address} \nphone : ${user.phone} \nemail : ${user.email}`);

// user.func = function(){
//     console.log("Hello!!",this.name);
// }

// console.log(user.func());

// const {phone} = user;  //destructuring
// console.log("phone number is : ",phone);

// const {email} = user;
// console.log("email is : ",email);

// ******* function ***********

//******** Function Declaration */ //hoisting allowed, hoisted (can be called before definition).

// saySomething();//function invoked before initialization
// function saySomething(){
//     console.log("Hello!!");
// }

// function add(a,b){
//     console.log(a+b);
// }
// add(6,3);

// function notification(userName)
// {
//     console.log(`${userName} has just logged in`);
// }
// notification("Naeem");

//*********** Function Expression */ //hoisting not allowed.

// const sub = function(a, b) {
//   return a - b;
// };
// console.log(sub(7, 5));

// let add = function(a,b){
//   console.log(a+b);
// }
// add(5,4);

//*********** default parameter */
//   function multi(a,b=1){
//     console.log(a*b);
//   }
// multi(2,2);

// function notification(name = "guest"){
//   console.log(`hello ${name}`);
// }
// notification();
// notification("nafiz");

//*********** Rest Parameters */
// function rest(...num1){ //using rest operator by ...  and ei 3 dot/rest operator use korle variable gula array er vitor store hoy
//     return num1;
// }
// console.log(rest(200, 400, 800, 1600, 2001));

// function rest1(v1,v2,...num1){ //rest operator er age variable use korle (like v1, v2, etc), index positon onujai value load kore
//     console.log(v1, v2);
//     console.log(num1); //arrays
// }
// rest1(200, 400, 800, 1600, 2001)

// function getScore(...score){
//   let total = 0;
//   score.forEach(function (val){
//     total += val;
//   });
//   console.log(total);
// }
// getScore(1,2,3,4,5)

// const getScore = (...score) => {
//   let total = 0;
//   for (let val of score) {
//     total += val;
//   }
//   console.log(total);
// };
// getScore(1, 2, 3, 4, 5);

// let add = (...rest)=>{
//   let sum = 0;
//   return
// }

// add(1,12);

//********** function & object */

// const user = {
//     name : "Naeem",
//     age: 23,
//     address : "Dhaka",
// }
// const user1 = {
//     name : "nafiz",
//     age: 14,
//     address : "Uttara",
// }
// function objfunc(a){
//     console.log(`my name is ${a.name} and i am ${a.age} years old and adress is ${a.address}`);

// }
// objfunc(user1);

// function add(a,b){
//     console.log(a+b);
// }
// add(5,7);

//************** Scope */
// const a = 100;

// if(true){
//     const a  = 50;
//     console.log("inner : ", a );

// }
// console.log(`outer : ${a}`);

//***** Closures (functions inside functions) */

// function abc() {
//   const name = "ABC";
//   let a = 55;
//   console.log(`this is from ${name} and my value is ${a}`);

//   function def() {
//     const name = "DEF";
//     let b = 66;
//     console.log(`this is from ${name} and my value is ${a}`);

//     function ghi() {
//       const name = "GHI";
//       console.log(`this is from ${name} and my value is ${b}`);
//     }

//     ghi(); // ✅ call ghi() here
//   }

//   def(); // ✅ call def() here
// }

// abc(); // ✅ call abc() to start everything

// function one(){
//     const firstname = "Naeem";

//     function two(){
//         lastname = "Sarker";
//         console.log(firstname);
//     }
//     two();
// }
// one();

// if(true){
//     const fastname = "naeem";
//     if(fastname === "naeem"){
//         const lastname = " sarker";
//         console.log(fastname + lastname);
//     }
// }

//*********** IIFE (Immediately Invoked Function Expression)*/
// (function(){
//   console.log("IIFE is running immediately!");

// })();

//***********this & arrow function */

// const obj = {
//   name: "Naeem",
//   age: 23,
//   notification() { //here noti is a method, cz its inside a obj
//   console.log(`this is ${this.name} & age is ${this.age}`); //used this key, cz of   property on the same obj, thats why we call those property using this key & this key should be use only object
//   },
// };
// obj.notification();

// const user = {
//   name: "Naeem",
//   id: 432,
//   login() {
//     console.log(`${this.name} logged in successfully & your user id ${this.id}`);
//   },
// };
// user.login();

//*********** arrow */

// const func = function(){  //func expression
//     console.log("hello, from expression");
// }

// const func1 = ()=>{
//     console.log("hello , from arrow");
// }
// func();
// func1();

//  const test = () => console.log("arrar called");
//  test();

//  const add = (a,b)=> `a+b = ${a+b}`;
//  console.log(add(9,10));

// let checking = (age)=> age>17 ? "allow" : "not allow";
// console.log(checking(18));

//******** Array of objects */
// const users = [
//     {id: 1, name : "Naeem", age : 23},
//     {id: 2, name : "Rahim", age : 25},
//     {id: 3, name : "Karim", age : 27},
// ]
// const admins = [
//     {id: 4, name : "rofiq", age : 23},
//     {id: 5, name : "borkot", age : 25},
//     {id: 6, name : "jabbar", age : 27},
// ]
//****** for of */
// for(let user of users){// users er obj value gula k ami user er maddhome tanbo
//     console.log(user.id,user.name,user.age);
// }

// for(let i of admins){
//     console.log(i.id, i.name, i.age);

// }

//******** Array Destructuring */
// const [user1, user2, user3] = users; (Extracts values from the array into separate variables by index wise)
// console.log("last line : ",user2.id, user3.name);

// for(let char of "Naeem"){
//     console.log(char);
// }

//********** map */
// const maping = new Map();
// maping.set('Bangladesh', "BD");
// maping.set('America', "USA");
// maping.set('Pakistan', "PK");

// for(let [k,v] of maping){
//     console.log(k,v);
// }

// const userMap = new Map();
// userMap.set('name :', "Naeem");
// userMap.set('id :', 432);

// for(let [key, value] of userMap){//destructuring the pair(each array) into 2 variables
//     console.log(key,value);
// }

// const setting = new Map();
// setting.set('theme', "dark");
// setting.set('language', "en");

// for(let [k, v] of setting){
//     console.log(`the ${k} is ${v}`);
// }
//***** for Each */
// const numbers = [10, 20, 30, 40];

// numbers.forEach(function (num) {
//   console.log(num);
// });

// numbers.forEach((num, index) => {
//   console.log(` ${index} = ${num}`);
// });

// const arr = ["naeem", "nafiz", "fatema"];

// arr.forEach((v) => {
//   console.log(v);
// });

// arr.forEach((v)=>console.log(v)); //short

// const prices = [100, 200, 300];
// let total = 0;

// prices.forEach((price) => {
//   total += price;
// });

// console.log("Total =", total);

//**** filter */ 
// Returns a new array (original array unchanged).
// const numbers = [10, 25, 30, 45, 60];

// const result = numbers.filter((num) => num > 20);

// console.log(result);

// const users = [
//   { name: "Naeem", age: 22 },
//   { name: "Sakib", age: 17 },
//   { name: "Rafi", age: 25 },
// ];

 // Filter only adults
// const adults = users.filter(user => user.age >= 18);

// console.log(adults);



//***  practice */
const numbers = [10, 25, 33, 40, 55, 62];

// const odds = numbers.filter((odd)=>{
//     return odd % 2 !== 0;
// });
// console.log(odds);

const odds = numbers.filter(num => num % 2 !== 0); //short
console.log(odds);

console.log("Each odd number:");
odds.forEach(num => console.log(num));


// const users = {
//     name: "naeem",
//     age: 23,

//     welmgs() {
//         console.log(`hello ${this.name}, you are ${this.age} years old`);
//     }
// };

// users.welmgs();

// const add = (a, b)=>{
//     return a+b;
// }
// console.log(add(10,12));

// if('A' == 65){
//     console.log("true");
// }else{
//     console.log("false");
// }

// const map = new Map();
// map.set('name', 'Naeem');
// map.set('age', '22');
// map.set('country', 'BD');

// for(const [key, value] of map){
//     console.log(key,":-",value);
// }

// let h1 = document.querySelector(".header");
// h1.addEventListener("click", function(){
//     h1.style.backgroundColor = "green";
//     h1.style.color = "white";
// })

// const func = ()=>{
//     console.log("this is a arrow function!!");

// }

// func();
