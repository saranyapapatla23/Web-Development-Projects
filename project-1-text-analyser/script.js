const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

const lengthBtn = document.getElementById("lengthBtn");
const upperBtn = document.getElementById("upperBtn");
const lowerBtn = document.getElementById("lowerBtn");
const sliceBtn = document.getElementById("sliceBtn");
const replaceBtn = document.getElementById("replaceBtn");
const clearBtn = document.getElementById("clearBtn");
const trimBtn = document.getElementById("trimBtn");
const wordCount = document.getElementById("wordCount");
const contains = document.getElementById("contains");
const rev = document.getElementById("reverse");
const startswith = document.getElementById("starts");
const endswith = document.getElementById("ends");
const char = document.getElementById("char");
const index = document.getElementById("index");
const first = document.getElementById("first");
const last = document.getElementById("last");

// Length
lengthBtn.addEventListener("click", function () {

    const text = textInput.value;

    output.textContent = "Length: " + text.length;
});


// Uppercase
upperBtn.addEventListener("click", function () {

    const text = textInput.value;

    output.textContent = text.toUpperCase();
});


// Lowercase
lowerBtn.addEventListener("click", function () {

    const text = textInput.value;

    output.textContent = text.toLowerCase();
});


// Slice
sliceBtn.addEventListener("click", function () {

    const text = textInput.value;

    const start = Number(prompt("Enter starting index:"));
    const end = Number(prompt("Enter ending index:"));

    const result = text.slice(start, end);

    output.textContent = result;
});


// Replace
replaceBtn.addEventListener("click", function () {

    const text = textInput.value;

    const oldText = prompt("Enter text to replace:");
    const newText = prompt("Enter replacement text:");

    const result = text.replace(oldText, newText);

    output.textContent = result;
});


// Clear
clearBtn.addEventListener("click", function () {

    textInput.value = "";
    output.textContent = "Your result will appear here...";

});
trimBtn.addEventListener("click",function(){
  const text = textInput.value;
  output.textContent = text.trim();
});

wordCount.addEventListener("click",function(){
  const text = textInput.value;
  output.textContent = text.trim().split(/\s+/).length;
});
contains.addEventListener("click",function(){
  const text = textInput.value;
  const containstext = prompt("Enter text you want to check");
  output.textContent = text.includes(containstext);
});
rev.addEventListener("click",function(){
  const text = textInput.value;
  output.textContent = text.split("").reverse().join("");
});
startswith.addEventListener("click",function(){
  const text = textInput.value;
  const giventext = prompt("Enter text to perfom starts with");
  output.textContent = text.startsWith(giventext);
});
endswith.addEventListener("click",function(){
  const text = textInput.value;
  const giventext = prompt("Enter text to perfom ends with");
  output.textContent = text.endsWith(giventext);
});
char.addEventListener("click",function(){
  const text = textInput.value;
  output.textContent = text.replaceAll(" ","").length;
});
index.addEventListener("click",function(){
  const text = textInput.value;
  const ind = Number(prompt("Enter Index :"));
  output.textContent = text[ind];
});
first.addEventListener("click",function(){
  const text = textInput.value;
  output.textContent = text[0];
});
last.addEventListener("click",function(){
  const text = textInput.value;
  output.textContent = text[text.length-1];
})
