//Variables
const image= document.getElementById('image-container');
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const welcome = document.getElementById('welcome');

let currentQuestion = {};
let availableQuestions = [];
let n = 0;

const questions = [{
    question: "What major key is this?",
    image: `<img src="../static/images/e-major.png"/>`,
    options: ["A major","C major","E major", "F# major"],
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
    options:  ["D major", "A major", "B major", "F# major"],
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
  startButton.style.display = 'none';
  newQuestion();
};

function newQuestion() {

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    
    image.innerHTML = questions[n].image;
    
    question.innerHTML = questions[n].question;

    for (let i = 0; i < 4; i++) {

      options[i].innerHTML = questions[n].options[i];
      };

    availableQuestions.splice(questionsIndex, 1);
    n++;

  };

  startButton.addEventListener('click', startGame);
  nextButton.addEventListener('click', newQuestion);