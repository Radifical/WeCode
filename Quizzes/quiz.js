//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questioncount = 0;
var BestScore = 0;
var SecondScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", Best);
q1a2.addEventListener("click", Second);
q1a3.addEventListener("click", Second);
q1a4.addEventListener("click", Second);

q2a1.addEventListener("click", Second);
q2a2.addEventListener("click", Best);
q2a3.addEventListener("click", Second);
q2a4.addEventListener("click", Second);

q3a1.addEventListener("click", Second);
q3a2.addEventListener("click", Best);
q3a3.addEventListener("click", Second);
q3a4.addEventListener("click", Second);

q4a1.addEventListener("click", Best);
q4a2.addEventListener("click", Second);
q4a3.addEventListener("click", Second);
q4a4.addEventListener("click", Second);

q5a1.addEventListener("click", Second);
q5a2.addEventListener("click", Second);
q5a3.addEventListener("click", Best);
q5a4.addEventListener("click", Second);

q6a1.addEventListener("click", Best);
q6a2.addEventListener("click", Second);
q6a3.addEventListener("click", Second);
q6a4.addEventListener("click", Second);

//#TODO: Define quiz functions here
function Best() {
  BestScore += 1;
  questioncount += 1;
  if (questioncount >= 6) {
    updateResult();
  }
}
function Second() {
  SecondScore += 1;
  questioncount += 1;
  if (questioncount >= 6) {
    updateResult();
  }
}

function updateResult() {
  var result = document.getElementById("result");
  if (BestScore > SecondScore) {
    result.innerHTML = "You are profficient in this language";
    console.log("Hello")
  } else if (SecondScore > BestScore ) {
    result.innerHTML = "You need to brush up on your knowledge in this language";
    console.log("Hello")
  }
}

