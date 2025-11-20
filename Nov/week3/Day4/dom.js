
// getelementById()
let h1 = document.getElementById("heading");
console.log(h1);

// getElementByClassName()
let boxArr = document.getElementsByClassName("box");
console.log(boxArr[0].innerText);
console.log(boxArr[1].innerHTML);


boxArr[0].innerText = "This is box 1";
console.log(boxArr[0]);

boxArr[1].innerHTML = "<h1>box heading</h1>";


// getElementByTagName()

let pArr = document.getElementsByTagName("p");
console.log(pArr);