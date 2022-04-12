//Variables
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const startButton = document.getElementById('start');

let currentQuestion = {};

const questions = [{
    question: "What major key is this?",
    image: `<img src="../static/images/e-major.png"/>`,
    options: {
      a: "A major",
      b: "C major",
      c: "E major",
      d: "F# major"
    },
    answer: "c"
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/f-major.png"/>`,
    options: {
      a: "F major",
      b: "G major",
      c: "Eb major",
      d: "D major"
    },
    answer: "a"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/c-flat-major.png"/>`,
    options: {
      a: "Bb minor",
      b: "C minor",
      c: "Db minor",
      d: "Ab minor"
    },
    answer: "d",
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/c-sharp-major.png"/>`,
    options: {
      a: "C major",
      b: "E major",
      c: "F major",
      d: "C# major"
    },
    answer: "d"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/g-flat-major.png"/>`,
    options: {
      a: "F minor",
      b: "D minor",
      c: "C minor",
      d: "Eb minor"
    },
    answer: "d"
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/a-major.png"/>`,
    options: {
      a: "D major",
      b: "A major",
      c: "B major",
      d: "F# major"
    },
    answer: "b"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/a-flat-major.png"/>`,
    options: {
      a: "B minor",
      b: "G minor",
      c: "E minor",
      d: "F minor"
    },
    answer: "d"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/b-flat-major.png"/>`,
    "options": {
      a: "Ab minor",
      b: "B minor",
      c: "G minor",
      d: "C# minor"
    },
    answer: "c"
  },

  {
    question: "What major key is this?",
    image: `<img src="../static/images/e-major.png"/>`,
    options: {
      a: "C# major",
      b: "D major",
      c: "B major",
      d: "A major"
    },
    answer: "c"
  },

  {
    question: "What minor key is this?",
    image: `<img src="../static/images/e-flat-major.png"/>`,
    options: {
      a: "Bb minor",
      b: "C minor",
      c: "A minor",
      d: "F minor"
    },
    answer: "b"
  }

];

startGame = () => {
  
  newQuestion();
};

function newQuestion() {
    
    question.innerHTML = questions[0].question;
    
};

startGame();