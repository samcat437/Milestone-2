//Functions

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  //for each question
  questions.forEach((currentQuestion, questionNumber) => {

  //variable to store the list of possible answers
  const options = [];
  
    //add for each available answer
  for(letter in currentQuestion.options){

    //add an html radio button
    options.push(
      `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.options[letter]}
      </label>`
    );
  };

  //add this question and its answers to the output 
  output.push(
    `<div class="question">${currentQuestion.question}</div>
    <div class="options">${options.join('')}</div>
    `
  );

  quizContainer.innerHTML = output.join('');
  });
};

function showResults() {

};

//Variables

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const questions = [{
  "question": "What major key is this?",
  "image": "",
  "options": [
    "A major", "C major", "E major", "F# major"
  ],
  "answer": "E major"
},

{
  "question": "What major key is this?",
  "image": "",
  "options": [
    "F major", "G major", "Eb major", "D major"
  ],
  "answer": "F major"
},

{
  "question": "What minor key is this?",
  "image": "",
  "options": [
    "Bb minor", "C minor", "Db minor", "Ab minor"
  ],
  "answer": "Ab minor"
},

{
  "question": "What major key is this?",
  "image": "",
  "options": [
    "C major", "E major", "F major", "C# major"
  ],
  "answer": "C# major"
},

{
  "question": "What minor key is this?",
  "image": "",
  "options": [
    "F minor", "D minor", "C minor", "Eb minor"
  ],
  "answer": "Eb minor"
},

{
  "question": "What major key is this?",
  "image": "",
  "options": [
    "D major", "A major", "B major", "F# major"
  ],
  "answer": "A major"
},

{
  "question": "What minor key is this?",
  "image": "",
  "options": [
    "B minor", "G minor", "E minor", "F minor"
  ],
  "answer": "F minor"
},

{
  "question": "What minor key is this?",
  "image": "",
  "options": [
    "Ab minor", "B minor", "G minor", "C# minor"
  ],
  "answer": "G minor"
},

{
  "question": "What major key is this?",
  "image": "",
  "options": [
    "C# major", "D major", "B major", "A major"
  ],
  "answer": "A major"
},

{
  "question": "What minor key is this?",
  "image": "",
  "options": [
    "Bb minor", "C minor", "A minor", "F minor"
  ],
  "answer": "C minor"
}

];


//display quiz right away
buildQuiz();

//on submit show results
submitButton.addEventListener('click', showResults);