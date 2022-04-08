//Functions
(function() {
function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  //for each question
  questions.forEach((currentQuestion, questionNumber) => {

  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_doc_images2
    const myImages = currentQuestion.image;
      let text = "";
      for (let i = 0; i < myImages.length; i++) {
      text +=  myImages[i].src + "<br>";
    };

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
    `<div class="slide">
      <div class="image">${currentQuestion.image}</div>
      <div class="question">${currentQuestion.question}</div>
      <div class="options">${options.join('')}</div>
    </div>`
  );

  quizContainer.innerHTML = output.join('');
  });
};

function showResults() {

  //gather answer containers from quiz 
  const answerContainers = quizContainer.querySelectorAll('.options');

  //keep track of user's answers
  let numCorrect = 0;

  //for each question
  questions.forEach((currentQuestion, questionNumber) => {

    //find selected answer 
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //if answer is correct 
    if(userAnswer === currentQuestion.answer) {
      numCorrect++;

      //color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      //if wrong or blank, color it red
      answerContainers[questionNumber].style.color = 'red';
    };
    
  });
  //show correct answers from total
  resultsContainer.innerHTML=`${numCorrect} out of ${questions.length}`;

};

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0) {
    previousButton.style.display = 'none';
  } else {
    previousButton.style.display = 'inline-block';
  } ;
  if(currentSlide === slides.length-1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  };
};

function showNextSlide() {
  showSlide(currentSlide + 1);
};

function showPreviousSlide() {
  showSlide(currentSlide - 1);
};

//Variables

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const questions = [
{
  "question": "What major key is this?",
  "image": `<img src="../static/images/e-major.png"/>`,
  "options": {
    a: "A major", b: "C major", c: "E major", d: "F# major"
  },
  "answer": "c",
},

{
  "question": "What major key is this?",
  "image": `<img src="../static/images/f-major.png"/>`,
  "options": {
    a: "F major", b: "G major", c: "Eb major", d: "D major"
  },
  "answer": "a",
},

{
  "question": "What minor key is this?",
  "image": `<img src="../static/images/c-flat-major.png"/>`,
  "options": {
    a: "Bb minor", b: "C minor", c: "Db minor", d: "Ab minor"
},
  "answer": "d",
},

{
  "question": "What major key is this?",
  "image": `<img src="../static/images/c-sharp-major.png"/>`,
  "options": {
    a: "C major", b: "E major", c: "F major", d: "C# major"
  },
  "answer": "d"
},

{
  "question": "What minor key is this?",
  "image": `<img src="../static/images/g-flat-major.png"/>`,
  "options": {
    a: "F minor", b: "D minor", c: "C minor", d: "Eb minor"
  },
  "answer": "d"
},

{
  "question": "What major key is this?",
  "image": `<img src="../static/images/a-major.png"/>`,
  "options": {
    a: "D major", b: "A major", c: "B major", d: "F# major"
  },
  "answer": "b"
},

{
  "question": "What minor key is this?",
  "image": `<img src="../static/images/a-flat-major.png"/>`,
  "options": {
    a: "B minor", b: "G minor", c: "E minor", d: "F minor"
  },
  "answer": "d"
},

{
  "question": "What minor key is this?",
  "image": `<img src="../static/images/b-flat-major.png"/>`,
  "options": {
    a: "Ab minor", b: "B minor", c: "G minor", d: "C# minor"
  },
  "answer": "c"
},

{
  "question": "What major key is this?",
  "image": `<img src="../static/images/e-major.png"/>`,
  "options": {
    a: "C# major", b: "D major", c: "B major", d: "A major"
  },
  "answer": "c"
},

{
  "question": "What minor key is this?",
  "image": `<img src="../static/images/e-flat-major.png"/>`,
  "options": {
    a: "Bb minor", b: "C minor", c: "A minor", d: "F minor"
  },
  "answer": "b"
}

];


//display quiz right away
buildQuiz();

//Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//show the first slide
showSlide(currentSlide);

//on submit show results
submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
})();