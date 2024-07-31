// 1. Ways to print in  Javascript
//console.log("HELLO WORLD");
//alert("me");
//document.write("this is a document write")

// 2. Javascript console API 
// console.log("HELLO WORLD", 4 + 7, "Another log")
// console.warn("this is a warning")
// console.error("this is an error")

// 3. Javascript Variables
// variables are container to store data values
// var number1 = 34;
// var number2 = 45;
// console.log(number1 + number2);

// // 4. Data Types in Javascript
// //Number
// var num1 = 456;
// var num2 = 45.6798;
// console.log(num1)
// console.log(num2)

// //string
// var str1 = "this is a string";
// var str2 = "this is also a string";
// console.log(str2)
// console.log(str1)

// //object
// var marks = {
//     ravi: 34,
//     shree: 68,
//     harry: 56,
//     jam: 23,
// }
// console.log(marks)

// //Bollean
// var a = true;
// var b = false;
// console.log(a, b)

// //undefined
// var und = undefined
// var und;
// console.log(und)

// //null
// var n1 = null;
// console.log(n1)

// /*
// At a very high level there are two types of datatypes in Javascript
// 1. Primitive datatypes:number,null, undefined, string,boolean,symbol
// 2. Reference datatype:Arrays and object

// */
// //Array
// var arr = [2, 4, "aditi", 8, 3, 5]
// console.log(arr)
// console.log(arr[5])
// console.log(arr[3])
// console.log(arr[2])

// //Operators in Javascript
// //Arithmetic Operator
// let x = 5;
// let y = 45;
// console.log("The value of x + y is", x + y)
// console.log("The value of x - y is", x - y)
// console.log("The value of x * y is", x * y)
// console.log("The value of x / y is", x / y)
// console.log("The value of x ** y is", x ** y)
// console.log("The value of x % y is", x % y)

// //Assignment Operator
// let z = y;
// z +=2; //z =  z + 2
// z -= 4;
// z *= 3;
// z /=6;
// console.log(z)

//Comparison operator
// let comp1 = 7
// let comp2 = 6
// console.log("comp1 == comp2  is ", comp1 == comp2) //false
// console.log("comp1 != comp2  is ", comp1 != comp2) //true
// console.log("comp1 === comp2  is ", comp1 === comp2) //false
// console.log("comp1 !== comp2  is ", comp1 !== comp2) //true
// console.log("comp1 > comp2  is ", comp1 > comp2) //true
// console.log("comp1 < comp2  is ", comp1 < comp2) //false
// console.log("comp1 >= comp2  is ", comp1 >= comp2) //true
// console.log("comp1 <= comp2  is ", comp1 <= comp2)  //false

//Logical operator
// let x = 8
// let y = 5
// console.log(x > y && x==8)  //true
// console.log(x > y && x==77) //false
// console.log(x<y || y ==6) //false
// console.log(x>y || y ==6) //true
// console.log(!false) //true

//Logical AND
// console.log(true && true) //true
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false

//Logical OR
// console.log(true || true) //true
// console.log(true || false) //true 
// console.log(false || true) //true
// console.log(false || false) // false

//logical NOT
// console.log(!false)
// console.log(!true)


//FUNCTIONS IN JAVASCRIPT
//Function help to implement the DRY Principle 
// function avg(a, b) {
//     c = (a + b) / 2; //return (a + b)/2
//     return c;
// }
// //DRY = Do not Repeat yourself
// c1 = avg(4, 6);
// c2 = avg(16, 14);
// // console.log(c1, c2)


// Conditionals in Javascript
// let age = 9;
// if (age >= 21) {
//     console.log('You can vote in the election');
// } else if (age >= 15) {
//     console.log('You are a teenager and cannot vote');
// } else if (age >= 10) {
//     console.log('You are too young to vote');
// } else {
//     console.log('You are still a baby');
// }


//LOOPS IN JAVASCRIPT

//for loop in js
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr)
// for (let i = 0; i < 5; i++) {
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element)
// })


// let j = 0;
// const aj = 0; //use const if we don't want to change the variable
// aj++;
//aj = aj +1;

//while loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let j = 10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do-while loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let j = 10;
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

//continue and break statement
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < arr.length; i++) {
//     if(i==7){
//         //break;
//         continue;
       
//     }
//     console.log(arr[i]);
// }

// let myarr = ["jam","yuhi",45,67,"true",null];
// console.log(myarr.length);
// myarr.pop();
// myarr.push("aditi",456)
// myarr.shift()
// myarr.unshift("heyjohn")
// const newlen = myarr.unshift(2345)
// console.log(newlen)
// console.log(myarr)

//Array Method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length); //Array length
// console.log(fruits.toString()); //Array toString()
// console.log(fruits.at(2)); //Array at()
// console.log(fruits.join("**")); //Array join()
// fruits.pop; //Array pop()
// fruits.push("Guava");  //Array push()
// fruits.shift();//Array shift()
// fruits.unshift("Lemon");//Array unshift()
// delete fruits[2];// Array delete()
// console.log(fruits);

// Array concat()
// fruits.copyWithin(1, 0);// Array copyWithin()
// fruits.flat();// Array flat()
// fruits.splice(2, 0, "Lemon", "Guava");// Array splice()
// // Array toSpliced()
// fruits.slice(1);// Array slice()

//String Method in javascript
// let mystring = "hello welcome to js tutorial welcome"
// console.log(mystring.length)
// console.log(mystring.indexOf("welcome"))
// console.log(mystring.lastIndexOf("welcome"))
// console.log(mystring.slice(0,4)) // 0 to n-1

// d = mystring.replace("hello", "Guys");
// console.log(d, mystring)

//JS dates method
// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());
// console.log(mydate.getHours());

// //DOM (DOCUMENT OBJECT MODEL) Manipulation

// let elem = document.getElementById('click');
// console.log(elem)

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// // elemClass[0].style.background = "green"
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")

// console.log(elem.innerHTML);
// console.log(elem.innerText);
//  //tag name 
// tn = document.getElementsByTagName("div");
// console.log(tn);
// createdElement = document.createElement("p");
// createdElement.innerText = "THis is a created para"
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement("b");
// createdElement2.innerText = "THis is a created bold"
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element);  --> remove an element


//Selecting using Query

// sel = document.querySelector('container')
// console.log(sel)
// sel = document.querySelectorAll('container')
// console.log(sel)

//Events In Javascript

// function clicked(){
//     console.log("The button was clicked")
// }
// window.onload = function(){
//     console.log("The document was loaded")
// }

// firstContainer.addEventListener('click', function(){
//     //document.querySelectorAll('.conatiner')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("clicked Done")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out container")
// })

// let prevHTML = document.querySelectorAll('.conatiner')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.conatiner')[1].innerHTML = prevHTML;
//     console.log("Mouse up when click on container")
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.conatiner')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Mouse down when click on container")
// })


//Arrow Functions
// function sum(a, b){
//     return a+b;

// }
// sum = (a, b)=>{
//     return a+b;
// }


//SetTimeout and Setinterval
// logKaro = ()=>{
//     console.log("I am your log");
// }

// setTimeout(logKaro, 2000); //2 sec i.e., 2000 milliseconds
// //repeatedly set interval 
// setInterval(logKaro, 2000);

// clr = setInterval(logKaro, 2000);
// clr = setTimeout(logKaro, 2000);
// use clrInterval /clearTimeout(clr) to cancel setInterval/setTimeout


//Javascript localStorage
// localStorage.setItem("name", "aditi");
// localStorage
// Storage {name: 'aditi', length: 1};
// localStorage.getItem("name");
// localStorage.removeItem('name')
// LocalStorage.clear();

//JSON (JAVASCRIPT OBJECT NOTATION)
// obj = {name: 'aditi', length: 1, a:{this: 'that'}} 
// //The JSON standard requires double quotes and will not accept single quotes, nor will the parser.
// jso = JSON.stringify(obj);
// console.log(jso)

// parsed = JSON.parse(`{"name": "aditi", "length": 1, "a":{"this": "that"}}`)
// console.log(parsed);

//Template Literals - Backticks
// a = 34;
// console.log(`this is my ${a}`);




