//JavaScript for MA2

// QUESTION 1
const myFunctionExpression = function () {
    console.log("Frode Karlsen");
};
myFunctionExpression();

// QUESTION 2
const button = document.querySelector(".btn");
button.addEventListener("click", btnLog);

function btnLog() {
    console.log("I was clicked");
}

// QUESTION 3
const name = document.querySelector("#firstName");
name.addEventListener("keydown", logKey);

function logKey(event) {
    console.log(event.key);
};

// QUESTION 4
const btn2 = document.querySelector("button");
btn2.addEventListener("mouseover", newClass);

function newClass(event) {
    event.target.classList.add("hover");
    console.log("hover");
}

// QUESTION 5
const btn3 = document.querySelector("[data-animal = 'dog']");
btn3.addEventListener("mouseout", removeClass);

function removeClass(event) {
    event.target.classList.remove("hover");
    console.log("removeHover");
}

// QUESTION 6
const list = document.querySelectorAll("li");

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", runThroughList);
}

function runThroughList(event) {
    console.log(event.target.data.animal)
}

// QUESTION 7
const animal = "cow";
switch(animal) {

    case "cat":
    console.log("Meow");
    break;

    case "cow":
    console.log("Moo");
    break;

    case "bird":
    console.log("Tweet");
    break;

    default:
    console.log("Harrumph");

}

// QUESTION 8
const sheep = ["Malcolm", "Anders", "Marie"];
function sheepNames(sheepname){
    console.log(sheepname);
}

sheep.forEach(sheepNames);

// QUESTION 9
var counter = 0;

function logTime(){
    console.log("hello");
   
    if(counter === 5) {
        clearInterval(interval);
    }
    
    counter++;
    
}

const interval = setInterval(logTime, 500);

// QUESTION 10
const divText = document.querySelector("div.container");

function updateText() {
    divText.innerText = "Text updated"
}

setTimeout(updateText, 2000);
