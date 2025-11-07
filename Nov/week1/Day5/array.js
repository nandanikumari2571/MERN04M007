console.log("Today we are going to learn Arrays Methods");

let arr=[1,2,3,4,5];
console.log(arr);

let arrObj=new Array(6,7,8,9);
console.log(arrObj);

console.log(Array(3).fill("js"));

console.log(Array.of(1,2,3,4,5,6,7,8,9));

console.log(Array.from("abscjhgd"));


// manipulation methods
arr.push(6);
console.log(arr);
arr.push(7,8,9,"hello",true)
console.log(arr)

arr.unshift(0,"byee")
console.log(arr)

for(let i=1;i<=5;i++){
arr.pop();
}
console.log(arr)

arr.shift();
console.log(arr);

console.log(arr.includes(7));

console.log(arr[1]);
console.log(arr.indexOf(7))
let num=0;
console.log(Array.isArray(num));


// console.log(arr.reverse());
console.log(arr.toReversed());
console.log(arr);

let numArr=[3,5,1,0]
// console.log(numArr.sort());
// console.log(numArr);


console.log(numArr.toSorted());
console.log(numArr);


console.log(arr);
console.log(arr.slice(1,5));

arr.splice(0,2,"hii",4,5,6) 
console.log(arr);
                         
console.log(arr.join("-"));
console.log(arr.toString());
console.log([1,2],[3,4],[5,6].flat());














