console.log("Practice Question on Array Function");
// let a=10; single line function

/*let b=20;
let c=30;*/ // multi line function

// FOREACH FUNCTION
// Q.1print each element of array
let nums=[10, 20, 30, 40];
nums.forEach(v=>{
    console.log(v);
})

// Q.2 print each index + value of an Array
nums.forEach((v, i)=>{
    console.log(i, v);
})


let numArr=[1,2,3,,4,5,6,7,8,9,10];
let count=0;
numArr.forEach((v)=>{
    if(v%2==0){
        count++;
    }
})
console.log(count);

// Q.3 Given ["apple", "banana", "orange", "mango"], print each fruit in uppercase using forEach function.
let fruits=["apple", "banana", "mango"];
fruits.forEach((v)=>{
    console.log(v.toUpperCase());
});


//Q.4 create a new array that contains only the lengths of each string using forEach.// MAP FUNCTION

let storeLren=[];
fruits.forEach((v)=>{
    storeLren.push(v.length);
});
console.log(storeLren);

// Q.5 using forEach, check how many times each items occurs:
// ["a", "b", "a", "c", "b", "a"]
let charArr=["a", "b", "a", "c", "b", "a"];
let obj={};

charArr.forEach((v)=>{
    if(obj[v]){
        obj[v]=obj[v]+1;
    }else{
        obj[v]=1;
    }
});
console.log(obj);

//Q.6 Using forEach, create an object where key = number, value = square of number

let sqObj = {};
numArr.forEach((v)=>{
    sqObj[v]=v*v;
});
console.log(sqObj);

// map
// ----------------------
// Q.7 Given [1, 2, 3, 4,], return [2, 4, 6, 8].

let nArr=[1,2,3,4];
let updateArr=nArr.map((v)=>{
    return v*2;
});
console.log(updateArr);


// Q.8 Given all strings to Uppercase in ["red","blue","green"]

let uppercaseValue=fruits.map((v)=>{
    return v.toUpperCase();
});
console.log(uppercaseValue);

// Q.9 From [10, 20 , 30], return each element + its index. (eg. , 10+0, 20+1, = 21)

let upArr = [10, 20, 30]. map((v, i) => v + i);
console.log(upArr);

//  Given array of users:

// [
// (name: "Alice", age: 25),
// (name: "Bob", age: 30),
// ]
// return only the names using map.

let objArr=[{name: "Alice", age: 25},{name: "Bob", age: 30}];

let namesArr=objArr.map((v)=>v.name);
console.log(namesArr);

// filter
// ----------------------
// filter out even numbers from [1, 2, 3, 4, 5, 6].

let evenNoArr=[1,2,3,4,5,6].filter((v)=>{
    return v%2==0;
});
console.log(evenNoArr);



// Q.10 Given [0, 1, false, true, "", "hello"], return only truthy values.

let trueArr=[0, 1, false, true, "", "hello"].filter((v)=>{

    return Boolean(!v)
})


console.log(trueArr);

// Q.11 Fiter out duplicate numbers using only filters + indexOf.



// Q.12 Count the total characters in an array of strings:
// ["Hi", "Hello", "Hey"] + 10

let charCount=["Hi", "Hello", "Hey"].reduce((count,curr)=>{

    return count+curr.length;
},0);
console.log(charCount);





    










