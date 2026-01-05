// Function:-
console.log("We are going to clear the doubt");

// Array Special Methods:-
let arr = [1,2,3,4];

// for V:-
// for(let v of arr){
//     console.log(v);
// }

// for Each:-
// arr.forEach((val,i)=>{
//     console.log(val,i);
// }) ;
// Val is value and i is index

// Map:-
// it is used for updating the array elements and returns a new array.

let newArr = arr.map((v,i)=>{
    return v+2;
});
console.log(newArr); // [ 3, 4, 5, 6 ]
console.log(arr);    // [ 1, 2, 3, 4 ]

// Filter:-
// It is used for filtering the array elements based on some condition and returns a new array.

let evenArr = arr.filter((v)=>{
    return v%2===0;
});
console.log(evenArr);

// Reduce:-
// It is used for reducing the array elements to a single value based on some operation.

let sum = arr.reduce((acc,cur)=>{  // acc=accumulator, cur=current value
    return acc+cur;
},0);  // 0 is the initial value of acc
console.log(sum);

// some:-
// It is used for checking if at least one element in the array satisfies the condition.

let hasEven = arr.some((v)=>{
    return v%2===0;
});
console.log(hasEven); // true

// every:-
// It is used for checking if all elements in the array satisfy the condition.

let isEven = arr.every((v)=>{
    return v%2===0;
});
console.log(isEven); // false




// DOM:-
// Document Object Model
// It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

// methods of DOM:-

// 1.method
// getElementById:-
// let button = document.getElementById("btn");
// console.log(btn);


// // getElementsByClassName:-
// let p = document.getElementsByClassName("para");
// console.log(p);

// // getElementsByTagName:-
// let paras = document.getElementsByTagName("p");
// console.log(paras);

// 2.method
// querySelector:-
let button = document.querySelector("#btn");  // for id use #, for class use .
console.log(button);

let p = document.querySelector(".para");
console.log(p);

// querySelectorAll:-
let p1= document.querySelectorAll(".para");
console.log(p1);


// Event:-
// Parts of Event:
// 1. Event target body
// 2. Event name
// 3. Event handeler

let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click",function(){
    console.log("Button clicked");
});

btn.addEventListener("dblclick",function(){
    console.log("Btn double click");
});

btn.addEventListener("mousedown",function(){
    console.log("mousedown");
});

btn.addEventListener("mouseup",function(){
    console.log("mouseup");
});

 btn.addEventListener("mouseenter",function(){
    console.log("mouse enter");
    });


btn.addEventListener("mouseleave",function(){
    console.log("mouse leave");
    });


 btn.addEventListener("mousemove",function(){
    console.log("mouse move");
    });


btn.addEventListener("mouseover",function(){
    console.log("mouse over");
    });


btn.addEventListener("mouseout",function(){
    console.log("mouse out");
    });



document.addEventListener("keydown",function(){
    console.log("keydown");
    });


    document.addEventListener("keyup",function(){
    console.log("keyup");
    });


    document.addEventListener("keypress",function(){
    console.log("keypress");
    });



