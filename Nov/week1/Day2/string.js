console.log("Today we are going to learn string method")
let str="Hello"
console.log(str[0])


//methods
//to get the indexing values
console.log(str[0])
console.log(str.charAt(1))


//string interpolation 
let animal="dog"
console.log('This is :${animal1}')


let url="https://www.qlith.com"
console.log('${url}/login')


// concat
console.log("hello hii" + 30);
console.log("hello" .concat("Bye"))


let str1="    Ql   ith  ";
console.log(str1.length)
console.log(str1.trim().length)
console.log(str1)

// console.log(str1.trimEnd())
// console.log(str1.trimStart())

// replace method
console.log(str1.replace("1","L"));
console.log(str1)


let desc="this is my cat . his name is poppycat . my cat has two baby"
console.log(desc.replaceAll("cat","Dog"))



let num=20;
console.log(num)
console.log(num.toString())


// slice method

let string="This,is,Qlith,office";
console.log(string.slice(2,6));
console.log(string.slice(2));
console.log(string.slice(4,2));     // starting index < ending index
console.log(string.slice(5,6));
console.log(string.slice(-4));
console.log(string.slice(-4,-2));

let strArr=string.split(",")
console.log(strArr)