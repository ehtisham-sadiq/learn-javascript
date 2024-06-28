const song = `
<div>
<h2><>WAP to print the following pattern</h2>
</div>
`;

// interpolation
const name = "mehwash";
const hello = "hello my name is " + name + ". Nice to meet you.";

// concatenation
let hello2 = "hello my name is " ;
hello2 = hello2 + name;
hello2 = hello2 + ". Nice to meet you.";


// "1" + "1"

// another example of interpolation
const myName = "mehwash";
const age = 21;
const message = `Hello! My name is ${myName}. Nice to meet you. I am ${age} years old.`;


const html = `
<div>
<h2> ${name} </h2>
<p> ${message} </p>

</div>

`;

document.body.innerHTML = html;






