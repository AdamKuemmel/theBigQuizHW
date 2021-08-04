$("#questionInput").text("");
$("#insideA").text("this is the answer.");
$("#insideB").text("this is the answer.");
$("#insideC").text("this is the answer.");
$("#insideD").text("this is the answer.");

//question array
var questions = [
  "whats is the name of my dog?",
  "what is his breed",
  "what is his favorite toy?",
];
// correct answer arrays
var correctA = ["Bruce", "german shepherd", "chuck-it ball"];

//answer arrays
var answers = [
  {
    A: "paul",
    B: "buddy",
    C: "Bruce",
    D: "milo",
  },
  {
    A: "german shepherd",
    B: "pitbull",
    C: "golden doodle",
    D: "poodle",
  },
  {
    A: "tennis ball",
    B: "kong",
    C: "rope",
    D: "chuck-it ball",
  },
];

for (var i = 0; i < answers.length; i++) {
  console.log(answers[2]);
}

//$("#top").siblings().eq(3).append[1]
//create a for loop for the questions

//create a for loop for the answers
