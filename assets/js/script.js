//load the Start quiz screen
$("#start").append("click here to start your quiz");

//set the start button click event function
$("#start")
  .append("<button>Start</button>")
  .click(function () {
    alert("your game is now starting");
    questionFunk();
  });

var correctA = ["bruce", "German shepherd", "chuck-it ball"];
//answer arrays
var questions = [
  {
    question: ["whats is the name of my dog?"],
    answers: ["paul", "buddy", "Bruce", "milo"],
    correctA: correctA[0],
  },
  {
    question: ["what is his breed"],
    answers: ["German shepherd", "lab", "pibull", "golden doodle"],
    correctA: correctA[1],
  },
  {
    question: ["what is his favorite toy?"],
    answers: ["rope", "tennis ball", "kong", "chuck-it ball"],
    correctA: correctA[2],
  },
];
//create a funtion to load the question into your container with each answer being a button
function questionFunk() {
  $("#start").replaceWith("");
  console.log(questions[0].question);
for (var i = 0; i < questions[0].answers.length; i++) { 
    
    var buttons = $('<button>'+ answers[i] + '</button>'); 
    buttons.appendTo('#container'); }



//create

//create a funtion to track the score

//

//console.log(questions[0].answers);

//for (var i = 0; i < answers.length; i++) {
///console.log(answers[i]);
//}

// $("#questionInput").text(questions[0]);
// $("#insideA").text(<button></button>);
// $("#insideB").text(answers[0]);
// $("#insideC").text(answers[0]);
// $("#insideD").text(answers[0]);

// consolelog(answers[0].A);

//$("#top").siblings().eq(3).append[1]
//create a for loop for the questions

//create a for loop for the answers
