// javascript console API 
// console.log(" hello word", 4 + 6, " aother log ");


// alert("me");
// document.write("this is document write")
// console.warn(" This is warning")
// console.error(" This is an error")
   
// javascript variables
// var number1 =34;
// var number2 =56;                                              
// console.log(number1+number2);


// data type in js
// Numbers
// var num1=45;
// var num2=54.36;
// console.log(num1);


// string
// var str1="This is string";
// var str2 ="This is also string";   
// console.log(str1)
// console.log(str2)

// object 
// var marks={
//     ash:416,
//     ashish:465,
//     sam:45,
// }
// console.log(marks);


// booleans
// var a=true;
// var b=false;
// console.log(a,b)


/////// undefined
// var und;
// console.log(und)
 
// var n=null;
// console.log(n);

// array/
// var arr = [1,2,33,4,]
// console.log(arr)\


/*
at a very hight level , there are two types of data types in javascript
1.primitive data type ; undefined, null , number ,string , boolean, symbol
2.reference data type; object and Arrary
*/
// operator in javascript
// arithmatic operator
// var a= 34;
// var b=56;
// console.log(" the value of a + b is ", a+b);
// console.log(" the value of a + b is ", a-b);
// console.log(" the value of a + b is ", a*b);
// console.log(" the value of a + b is ", a/b);


// comparison operator
// var x = 34;
// var y = 41;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

// logical operators
// console.log(true && true);
// console.log(false && true);
// console.log(false && false);
// console.log(true && false);

// console.log(true || true);
// console.log(false || true);
// console.log(false || false);
//  console.log(true || false);

// logical not !
// console.log(!false);
// console.log(!true);


// function in javascript
// Dry = Do not repect yourself
// function avg(a,b){
//     c=(a + b)/2;
//     return c;
// }

// c1= avg(4,6);
// c2= avg(12,5);
// console.log(c1, c2);


// conditions  in javascript
// var age =26;

// break and continue
// var arr = [1,2,3,4,5,6,7];
// // console.log(arr)
// for(var i=0;i<arr.length;i++){ 
// if(i==2){
//     break;
//     // continue;
// }
// console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })


// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }


// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// let myArr =[ "cooler","camera", 25 ,null,false];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Ashish");
// myArr.shift();
//  console.log(myArr.unshift("Ashish"));
// console.log(myArr); 


// String Method in javascript
// let mystring="Ashish is hero ";
// console.log(mystring.length);
// console.log(mystring.lastIndexOf("hero"));
// console.log(mystring.slice(0,5));
// d = mystring.replace("hero","smart");
// console.log( mystring);
// console.log(d);

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// DOM manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].classList.add("ash")
// elemclass[0].classList.add("vish")
// console.log(elem.innerHTML);
// // console.log(elem.innerText);
// tn = document.getElementsByTagName("div")
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);


// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created blod";
// tn[0].replaceChild(createdElement2, createdElement);


// selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)

// sel = document.querySelectorAll('.container')
// console.log(sel)

// Events in javascript


// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log(' The document was loaded')
// }

// firstContainer.addEventListener('click',function(){
//     console.log('click hua')
// })

// Arrow Function
// function sum(a,b){
//     return a+b;
// }
 // sum = (a,b)=>{
//     return a+b;
// }

// setTimeout and setInterval

// ash  = ()=>{
//     console.log(" I am Ashish")
// }
//  setTimeout(ash, 2000);
//  clr = setInterval(ash, 5000);
// use to clearInterval(clr)/clearTimeout(clr to cancel setInterval/setTimeout)

//  obj = {name:'Ashish', length:1 ,a: {this: 'tha\\"t'}} 
// jsp = JSON.stringify(obj);
// console.log(typeof jsp)
// console.log(jsp)
// parsed =JSON.parse('{"name":"Ashish","length":1,"a":{"this":"that"}}')
// console.log(parsed);




























































