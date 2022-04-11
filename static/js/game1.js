function startGame() {
  console.log("Hi");
  //variable to store HTML output
  const display = [];

  questions.forEach((currentQuestion, questionNumber) => {
    const questionImage = currentQuestion.image;
    let displayImage = "";
    for (i = 0; i < questionImage.length; i++) {
      displayImage += questionImage + "<br>";
    };

    //variable to store the list of possible answers
    const options = [];

    for (letter in currentQuestion.options) {

      options.push(
        `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.options[letter]}
    </label>`
      );
    };

    display.push(
      `<div class="slide">
    <div class="image">${currentQuestion.image}</div>
    <div class="question">${currentQuestion.question}</div>
    <div class="options">${options.join('')}</div>
  </div>`
    );

    quizContainer.innerHTML = display.join('');
  });
};

function showSlide(n) {
  currentSlide = n;
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');

  if (currentSlide === 0) {
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
    checkAnswerButton.style.display = 'inline-block';
  };

  if (currentSlide === slides.length-1) {
    nextButton.style.display = 'none';
    checkAnswerButton.style.display = 'inline-block';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  };
};

function showNextSlide() {
  showSlide(currentSlide + 1);
}; 

//Variables

const quizContainer = document.getElementById('quiz');
const startButton = document.getElementById('start');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const checkAnswerButton = document.getElementById('check');
const questions = [{
    "question": "What major key is this?",
    "image": `<img src="../static/images/e-major.png"/>`,
    "options": {
      a: "A major",
      b: "C major",
      c: "E major",
      d: "F# major"
    },
    "answer": "c",
  },

  {
    "question": "What major key is this?",
    "image": `<img src="../static/images/f-major.png"/>`,
    "options": {
      a: "F major",
      b: "G major",
      c: "Eb major",
      d: "D major"
    },
    "answer": "a",
  },

  {
    "question": "What minor key is this?",
    "image": `<img src="../static/images/c-flat-major.png"/>`,
    "options": {
      a: "Bb minor",
      b: "C minor",
      c: "Db minor",
      d: "Ab minor"
    },
    "answer": "d",
  },

  {
    "question": "What major key is this?",
    "image": `<img src="../static/images/c-sharp-major.png"/>`,
    "options": {
      a: "C major",
      b: "E major",
      c: "F major",
      d: "C# major"
    },
    "answer": "d"
  },

  {
    "question": "What minor key is this?",
    "image": `<img src="../static/images/g-flat-major.png"/>`,
    "options": {
      a: "F minor",
      b: "D minor",
      c: "C minor",
      d: "Eb minor"
    },
    "answer": "d"
  },

  {
    "question": "What major key is this?",
    "image": `<img src="../static/images/a-major.png"/>`,
    "options": {
      a: "D major",
      b: "A major",
      c: "B major",
      d: "F# major"
    },
    "answer": "b"
  },

  {
    "question": "What minor key is this?",
    "image": `<img src="../static/images/a-flat-major.png"/>`,
    "options": {
      a: "B minor",
      b: "G minor",
      c: "E minor",
      d: "F minor"
    },
    "answer": "d"
  },

  {
    "question": "What minor key is this?",
    "image": `<img src="../static/images/b-flat-major.png"/>`,
    "options": {
      a: "Ab minor",
      b: "B minor",
      c: "G minor",
      d: "C# minor"
    },
    "answer": "c"
  },

  {
    "question": "What major key is this?",
    "image": `<img src="../static/images/e-major.png"/>`,
    "options": {
      a: "C# major",
      b: "D major",
      c: "B major",
      d: "A major"
    },
    "answer": "c"
  },

  {
    "question": "What minor key is this?",
    "image": `<img src="../static/images/e-flat-major.png"/>`,
    "options": {
      a: "Bb minor",
      b: "C minor",
      c: "A minor",
      d: "F minor"
    },
    "answer": "b"
  }

];

//Pagination
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showNextSlide(currentSlide);

//Event listeners 
startButton.addEventListener('click', startGame);