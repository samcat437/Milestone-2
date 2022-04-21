/**
 * @jest-environment jsdom
 */

const {
  beforeEach,
  test,
  expect,
  beforeAll
} = require("@jest/globals");

const {
  startGame,
  readyQuestion,
  newQuestion
} = require("../game1");

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("DOM tests during startGame function", () => {
  test("expects welcome id content, submit and start buttons to disappear", () => {
    startGame();
    expect(document.getElementById("welcome").style.display).toBe("none");
    expect(document.getElementById("start").style.display).toBe("none");
    expect(document.getElementById("submit").style.display).toBe("none");
  });
  test("nav-button id elements reappear by removing the hidden class", () => {
    startGame();
    expect(document.getElementById("nav-buttons").classList).toEqual(expect.not.stringContaining("hidden"));
  });
});

describe("DOM tests during readyQuestion function", () => {
  test("the disabled class to be removed for each option in the options array", () => {
    readyQuestion();
    let options = Array.from(document.querySelectorAll(".option-container"));
    options.forEach(option => {
      expect(option.classList).toEqual(expect.not.stringContaining("disabled"));
    });
  });
  test("the hidden class is added to the message element", () => {
    readyQuestion();
    expect(document.getElementById("message").classList).toContain("hidden");
  });
  test("disabled attribute is added to the check button", () => {
    expect(document.getElementById("check").hasAttribute("disabled")).toBeTruthy();
  });
  test("correct and incorrect classes removed", () => {
    if (document.querySelector(".correct")) {
      expect(document.querySelector(".correct").classList).toEqual(expect.not.stringContaining("correct"));
    } else if (document.querySelector(".incorrect")) {
      expect(document.querySelector(".incorrect").classList).toEqual(expect.not.stringContaining("incorrect"));
    } else if (document.querySelector(".selected")) {
      expect(document.querySelector(".selected").classList).toEqual(expect.not.stringContaining("selected"));
    };
  });
});

describe("DOM tests during nextQuestion function", () => {
  test("disabled attribute is added to the nextbutton", () => {
    expect(document.getElementById("next").hasAttribute("disabled")).toBeTruthy();
  });
  test("class hidden is removed from option container id element to enable options to display", () => {
    newQuestion();
    expect(document.getElementById("option-container").classList).toEqual(expect.not.stringContaining("hidden"));
  });

  //test is accessing random index of the questions array - fixed when n is added to the scope of the function.
  // test("question, options and image is populated from the questions array", () => {
  //     let n = 0;
  //     const QUESTIONS = [{
  //       question: "What major key is this?",
  //       image: `<img src="static/images/e-major.png">`,
  //       options: ["A major", "C major", "E major", "F# major"],
  //       answer: "E major"
  //     },
  
  //     {
  //       question: "What major key is this?",
  //       image: `<img src="static/images/f-major.png"/>`,
  //       options: ["F major", "G major", "Eb major", "D major"],
  //       answer: "F major"
  //     },
  
  //     {
  //       question: "What minor key is this?",
  //       image: `<img src="static/images/c-flat-major.png"/>`,
  //       options: ["Bb minor", "C minor", "Db minor", "Ab minor"],
  //       answer: "Ab minor"
  //     },
  
  //     {
  //       question: "What major key is this?",
  //       image: `<img src="static/images/c-sharp-major.png"/>`,
  //       options: ["C major", "E major", "F major", "C# major"],
  //       answer: "C# major"
  //     },
  
  //     {
  //       question: "What minor key is this?",
  //       image: `<img src="static/images/g-flat-major.png"/>`,
  //       options: ["F minor", "D minor", "C minor", "Gb minor"],
  //       answer: "Gb minor"
  //     },
  
  //     {
  //       question: "What major key is this?",
  //       image: `<img src="static/images/a-major.png"/>`,
  //       options: ["D major", "A major", "B major", "F# major"],
  //       answer: "A major"
  //     },
  
  //     {
  //       question: "What minor key is this?",
  //       image: `<img src="static/images/a-flat-major.png"/>`,
  //       options: ["B minor", "G minor", "E minor", "F minor"],
  //       answer: "F minor"
  //     },
  
  //     {
  //       question: "What minor key is this?",
  //       image: `<img src="static/images/b-flat-major.png"/>`,
  //       options: ["Ab minor", "B minor", "G minor", "C# minor"],
  //       answer: "G minor"
  //     },
  
  //     {
  //       question: "What major key is this?",
  //       image: `<img src="static/images/b-major.png"/>`,
  //       options: ["C# major", "D major", "B major", "A major"],
  //       answer: "B major"
  //     },
  
  //     {
  //       question: "What minor key is this?",
  //       image: `<img src="static/images/e-flat-major.png"/>`,
  //       options: ["Bb minor", "C minor", "A minor", "F minor"],
  //       answer: "C minor"
  //     }
  
  //   ];
  //   newQuestion();
  //   let image = document.getElementById("image-container");
  //   let question = document.querySelector("#question");
  //   let options = Array.from(document.querySelectorAll(".option-container"));
  //   // expect(image.innerHTML).toEqual(QUESTIONS[n].image);
  //   // expect(question.innerHTML).toEqual(QUESTIONS[n].question);
  //   for (let i = 0; i < 4; i++) {
  //     expect(options[i].innerText).toEqual(QUESTIONS[n].options[i]);
  //   };
  // });
  test("n is incremented", () => {
    newQuestion();
    expect(n).toBe(1);
  })
});