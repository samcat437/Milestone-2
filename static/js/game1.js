//Variables
const welcome = document.getElementById('welcome');
const image = document.getElementById('image-container');
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-container'));
const optionContainer = document.getElementById('option-container');
const gameContainer = document.getElementById('game');
const score = document.getElementById('score');
const message = document.getElementById('message');


const buttonsContainer = document.getElementById('nav-buttons');
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const checkButton = document.getElementById('check');


let n = 0;
let numCorrect = 0;

const questions = [{
    question: "What major key is this?",
    image: `<img src="../static/images/e-major.png"/>`,
    options: ["A major", "C major", "E major", "F# major"],
    answer: "E major"
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/f-major.png"/>`,
    options: ["F major", "G major", "Eb major", "D major"],
    answer: "F major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/c-flat-major.png"/>`,
    options: ["Bb minor", "C minor", "Db minor", "Eb minor"],
    answer: "Eb minor"
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/c-sharp-major.png"/>`,
    options: ["C major", "E major", "F major", "C# major"],
    answer: "C# major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/g-flat-major.png"/>`,
    options: ["F minor", "D minor", "C minor", "Gb minor"],
    answer: "Gb minor"
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/a-major.png"/>`,
    options: ["D major", "A major", "B major", "F# major"],
    answer: "A major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/a-flat-major.png"/>`,
    options: ["B minor", "G minor", "E minor", "F minor"],
    answer: "F minor"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/b-flat-major.png"/>`,
    options: ["Ab minor", "B minor", "G minor", "C# minor"],
    answer: "G minor"
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/b-major.png"/>`,
    options: ["C# major", "D major", "B major", "A major"],
    answer: "B major"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/e-flat-major.png"/>`,
    options: ["Bb minor", "C minor", "A minor", "F minor"],
    answer: "C minor"
  }

];

startGame = () => {
  welcome.style.display = 'none';
  buttonsContainer.classList.remove('hidden');
  startButton.style.display = 'none';
  submitButton.style.display = 'none';

  newQuestion();
};

function readyQuestion() {
  console.log('getting ready');

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
  nextButton.setAttribute('disabled', "");
  optionContainer.classList.remove('hidden');
  image.innerHTML = questions[n].image;

  question.innerHTML = questions[n].question;

  for (let i = 0; i < 4; i++) {
    options[i].innerText = questions[n].options[i];
  };

  n++;
  if (n === questions.length) {
    submitButton.style.display = 'inline-block';
    nextButton.classList.add('hidden');
  };
  selectAnswer();
};

function selectAnswer() {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', e => {
        options[i].classList.add('selected');
        exposeCheck();
      });
      //still not able to have one get clicked and then stop the ability to click
      if (document.querySelector('selected')) {
        options[i].removeEventListener('click', e);
        
      };
  };
};

function exposeCheck() {
  checkButton.removeAttribute('disabled');
  checkButton.classList.remove('btn-secondary');
  checkButton.classList.add('checkactive');
};

function checkAnswer() {

  let i = n - 1;
  const selection = document.querySelector('.selected');
  const selectionValue = document.querySelector('.selected').innerHTML;
  const answer = questions[i].answer;

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

  score.innerHTML = `<div>Score: <br>${numCorrect} / ${questions.length}</div>`;
  nextButton.removeAttribute('disabled');
  nextButton.addEventListener('click', readyQuestion);
};

function submit () {
  message.classList.add('hidden');
  if (numCorrect > 7) {
  gameContainer.innerHTML = `<div>You scored ${numCorrect} / ${questions.length}. Well done! Tap start to try the game again.</div>`
  } else { 
    gameContainer.innerHTML = `<div>You scored ${numCorrect} / ${questions.length}. Tap the lesson button to review how to identify the key signatures and then try again!</div>`
  }
};

startButton.addEventListener('click', startGame);
checkButton.addEventListener('click', checkAnswer);
submitButton.addEventListener('click', submit);