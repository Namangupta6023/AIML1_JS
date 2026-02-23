/*//console.log("Hello World") ;
document.write("Hello World") ;*/

// var num = 10 ;
// console.log(num) ;
// console.log(typeof(num)) ;
// num = false ;
// console.log(num) ;
// console.log(typeof(num )) ;
// num = "Sanjeev Soni" ;
// console.log(num) ;
// console.log(typeof(num)) ;
// num = null ;
// console.log(num) ;
// console.log(typeof(num )) ;

// num = undefined ;
// console.log(num) ;
// console.log(typeof(num )) ;

// //array 

// var numberArray = [1,2,3];
// var animals = new Array("cat","tiger","lion") ;

// // Object  
// var person = {
//     name : 'Barack Hussein Obamam '  ;
//     age : '51' ;

// }

// const sym1 = Symbol(4) ;
// console.log(sym1) ;
// const sym2 = Symbol(4) ;
// console.log(sym2) ;
// if(sym1 == sym2) {
//     console.log("true") ;
// }
// else{
//     console.log("false") ;
// }

/*var a = 100 ;
var b = 13 ;
var c = 10 ; 
var linebreak = "<br>" ;
document.write("a+b+c  = ") ;
result = a + b + c ;
document.write(result) ;
document.write(linebreak) ;*/


// var a = 10 ;
// var b = 20 ;

// var linebreak = "<br/>" ;
// document.write("(a==b)=>") ;
// result = (a<b) ;
// document.write(result) ;
// document.write(linebreak) ;

// document.write("(a==b)=>") ;
// result = (a>b) ;
// document.write(result) ;
// document.write(linebreak) ;

// document.write("(a==b)=>") ;
// result = (a!=b) ;
// document.write(result) ;
// document.write(linebreak) ;

// document.write("(a==b)=>") ;
// result = (a>=b) ;
// document.write(result) ;
// document.write(linebreak) ;

// document.write("(a==b)=>") ;
// result = (a<=b) ;
// document.write(result) ;
// document.write(linebreak) ;

// var i ;
// for(i = 0 ; i < 3 ; i++){
//     console.log(i) ;
// }
// for(var count = 0 ; count < 10 ; count++){
//     document.write("current count : " + count) ;
//     document.write("<br/>") ;
// }
// document.write("Lool Ended") ;

const person = {
    fname : "Ajay",
    lname : "Singh",
    age : 25
} ;

for(let x in person){
    console.log("person details : " + person[x]) 
}