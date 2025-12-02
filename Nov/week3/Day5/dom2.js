console.log("today we are going to learn DOM object")
// querySelector();
let h1 = document.querySelector("#head");
console.log(h1);

let divFirst = document.querySelector(".box");
console.log(divFirst);

let Firstp= document.querySelector("p");
console.log(Firstp);

// querySelectorAll();
let classes = document.querySelectorAll(".box");
console.log(classes);


// classList
 let classlist = divFirst.classList;
console.log(classlist);

// textContent
let textContent= divFirst.textContent;
console.log(textContent);

// innerText
let innerText= divFirst.innerText;
console.log(innerText);

// setAttribute
divFirst.setAttribute("Id","headingId");
console.log(divFirst);

// getAttribute
console.log(divFirst.getAttribute("class"));






