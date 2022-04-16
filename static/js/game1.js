//Variables
const welcome = document.getElementById('welcome');
const image = document.getElementById('image-container');
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-container'));
const optionContainer = document.getElementById('option-container');

const buttonsContainer = document.getElementById('nav-buttons')
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const checkButton = document.getElementById('check');


let n = 0;


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
    options: ["Bb minor", "C minor", "Db minor", "Ab minor"],
    answer: "Ab minor"
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
    options: ["F minor", "D minor", "C minor", "Eb minor"],
    answer: "Eb minor"
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
    image: `<img src="../static/images/e-major.png"/>`,
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

function readyQuestion(selection) {
  console.log(selection);
  selection.classList.remove('correct');
  selection.classList.remove('incorrect');
  newQuestion();
};

function newQuestion() {
  checkButton.classList.add('.inactive');
  optionContainer.classList.remove('hidden');
  image.innerHTML = questions[n].image;

  question.innerHTML = questions[n].question;

  for (let i = 0; i < 4; i++) {
    options[i].innerText = questions[n].options[i];
  };

  n++;
  //not working
  if (questions[n].length - 1) {
    submitButton.style.display = 'inline-block';
    nextButton.classList.add = 'hidden';
  };
  selectAnswer();
};
 
function selectAnswer() {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', e => {
      options[i].classList.add('selected');
      //still not able to have one get clicked and then stop the ability to click.
      if (options[i].classList.contains('selected')) {
        options[i].removeEventListener('click', selectAnswer);
      };
      exposeCheck(); 
    });
  };
};

function exposeCheck() {
  checkButton.removeAttribute('disabled');
  checkButton.classList.remove('btn-secondary');
  checkButton.classList.add('checkactive');
};

function checkAnswer() {
  let n = 0;
  const selection = document.querySelector('.selected');
  const selectionValue = document.querySelector('.selected').innerHTML
  const answer = questions[n].answer;
  console.log(selectionValue);
  console.log(answer);
  selection.classList.remove('selected');

  if (selectionValue === answer) {    
    selection.classList.add('correct');
  } else {
    selection.classList.add('incorrect');
  };
  nextButton.addEventListener('click', readyQuestion);
};

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', newQuestion);
checkButton.addEventListener('click', checkAnswer);