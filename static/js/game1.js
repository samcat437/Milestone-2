//Variables
let startButton = document.getElementById('start');
let submitButton = document.getElementById('submit');
let checkButton = document.getElementById('check');

let n = 0;
let numCorrect = 0;

const QUESTIONS = [{
    question: "What major key is this?",
    image: `<img src="static/images/e-major.png"/>`,
    options: ["A major", "C major", "E major", "F# major"],
    answer: "E major"
  },

  {
    question: "What major key is this?",
    image: `<img src="static/images/f-major.png"/>`,
    options: ["F major", "G major", "Eb major", "D major"],
    answer: "F major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="static/images/c-flat-major.png"/>`,
    options: ["Bb minor", "C minor", "Db minor", "Eb minor"],
    answer: "Eb minor"
  },

  {
    question: "What major key is this?",
    image: `<img src="static/images/c-sharp-major.png"/>`,
    options: ["C major", "E major", "F major", "C# major"],
    answer: "C# major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="static/images/g-flat-major.png"/>`,
    options: ["F minor", "D minor", "C minor", "Gb minor"],
    answer: "Gb minor"
  },

  {
    question: "What major key is this?",
    image: `<img src="static/images/a-major.png"/>`,
    options: ["D major", "A major", "B major", "F# major"],
    answer: "A major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="static/images/a-flat-major.png"/>`,
    options: ["B minor", "G minor", "E minor", "F minor"],
    answer: "F minor"
  },

  {
    question: "What minor key is this?",
    image: `<img src="static/images/b-flat-major.png"/>`,
    options: ["Ab minor", "B minor", "G minor", "C# minor"],
    answer: "G minor"
  },

  {
    question: "What major key is this?",
    image: `<img src="static/images/b-major.png"/>`,
    options: ["C# major", "D major", "B major", "A major"],
    answer: "B major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="static/images/e-flat-major.png"/>`,
    options: ["Bb minor", "C minor", "A minor", "F minor"],
    answer: "C minor"
  }

];

startGame = () => {
  let welcome = document.getElementById('welcome');
  let buttonsContainer = document.getElementById('nav-buttons');
  let startButton = document.getElementById('start');
  let submitButton = document.getElementById('submit');

  welcome.style.display = 'none';
  buttonsContainer.classList.remove('hidden');
  startButton.style.display = 'none';
  submitButton.style.display = 'none';

  newQuestion();
};

function readyQuestion() {
  console.log('getting ready');
  let message = document.getElementById('message');

  message.classList.add('hidden');

  if (document.querySelector('.correct')) {
    document.querySelector('.correct').classList.remove('correct');
  } else if (document.querySelector('.incorrect')) {
    document.querySelector('.incorrect').classList.remove('incorrect');
  } else if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  };

  newQuestion();
};

function newQuestion() {
  let image = document.getElementById('image-container');
  let question = document.querySelector('#question');
  let options = Array.from(document.querySelectorAll('.option-container'));
  let optionContainer = document.getElementById('option-container');
  let nextButton = document.getElementById('next');
  
  nextButton.setAttribute('disabled', "");
  optionContainer.classList.remove('hidden');
  image.innerHTML = QUESTIONS[n].image;

  question.innerHTML = QUESTIONS[n].question;

  for (let i = 0; i < 4; i++) {
    options[i].innerText = QUESTIONS[n].options[i];
  };

  n++;
  if (n === QUESTIONS.length) {
    submitButton.style.display = 'inline-block';
    nextButton.classList.add('hidden');
  };
  selectAnswer();
};

function selectAnswer() {
  let options = Array.from(document.querySelectorAll('.option-container'));

   options.forEach(option => {
    option.addEventListener('click', i => {
        option.classList.add('selected');
        exposeCheck();
        options.forEach(option => {
          if (!option.classList.contains("selected")) {
            option.classList.add("disabled");
          };
        });
      });
  });
};

function exposeCheck() {
  let checkButton = document.getElementById('check');

  checkButton.removeAttribute('disabled');
  checkButton.classList.remove('btn-secondary');
  checkButton.classList.add('checkactive');  
};

function checkAnswer() {

  let i = n - 1;
  let selection = document.querySelector('.selected');
  let selectionValue = document.querySelector('.selected').innerHTML;
  let answer = QUESTIONS[i].answer;
  let score = document.getElementById('score');
  let message = document.getElementById('message');
  let nextButton = document.getElementById('next');

  console.log(selectionValue);
  console.log(answer);

  selection.classList.remove('selected');

  if (selectionValue === answer) {
    numCorrect++;
    selection.classList.add('correct');
    message.innerHTML = `Congratulations! You're correct.`
  } else {
    selection.classList.add('incorrect');
    message.innerHTML = `Oops! The correct answer is ${answer}.`;
  };

  score.innerHTML = `<div>Score: <br>${numCorrect} / ${QUESTIONS.length}</div>`;
  nextButton.removeAttribute('disabled');
  nextButton.addEventListener('click', readyQuestion);
};

function submit() {
  let gameContainer = document.getElementById('game');
  let message = document.getElementById('message');

  message.classList.add('hidden');

  if (numCorrect > 7) {
  gameContainer.innerHTML = `<div>You scored ${numCorrect} / ${QUESTIONS.length}. Well done! Tap start to try the game again.</div>`
  } else { 
    gameContainer.innerHTML = `<div>You scored ${numCorrect} / ${QUESTIONS.length}. Tap the lesson button to review how to identify the key signatures and then try again!</div>`
  };
};

window.addEventListener('DOMContentLoaded', (event) => {
  startButton.addEventListener('click', startGame);
  checkButton.addEventListener('click', checkAnswer);
  submitButton.addEventListener('click', submit);
});


