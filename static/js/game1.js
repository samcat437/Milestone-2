//Variables
const welcome = document.getElementById('welcome');
const image = document.getElementById('image-container');
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-container'));
const optionContainer = document.getElementById('option-container');

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
  startButton.style.display = 'none';
  submitButton.style.display = 'none';

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
  };


  // options.forEach(option => {
  //     option.addEventListener('click', e => {
  //       option.classList.toggle('selected');
  //       checkAnswer();
  //     });
  //   });
  // };
  options.forEach(option => {
    function select() {
        option.classList.toggle('selected');
        checkAnswer();
      };
    });     
};

// function select(option) {
//   console.log('hi');
//   option.classList.toggle('selected');
//   checkAnswer();
//   };


  
  



function checkAnswer() {
  checkButton.removeAttribute('disabled');
  checkButton.classList.remove('btn-secondary');
  checkButton.classList.add('active');
  //not working - need to rewrite 116
  if (checkButton.classList.contains('active')) {
    for (let i = 0 ; i < options.length; i++) {
      options[i].removeEventListener('click', select); 
  };
  };
  // const userAnswer = e.target;
  // const answer = questions[n].answer;
  // if (userAnswer === answer) {
  //   option.classList.add('correct');
  // } else {
  //   option.classList.add('incorrect');
};

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', newQuestion);
for (let i = 0 ; i < options.length; i++) {
  options[i].addEventListener('click', select); 
};
