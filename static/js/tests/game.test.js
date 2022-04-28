/**
 * @jest-environment jsdom
 */

const {
  test,
  expect,
  beforeAll
} = require("@jest/globals");

const {
  startGame,
  readyQuestion,
  newQuestion,
  QUESTIONS
} = require("../game");

let {
  n
} = require("../game");

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("DOM tests during nextQuestion function", () => {
  test("question, options and image is populated from the questions array", () => {
    let image = document.getElementById("image-container");
    let question = document.querySelector("#question");
    let options = Array.from(document.querySelectorAll(".option-container"));
    newQuestion();
    expect(image.innerHTML).toEqual(QUESTIONS[n].image);
    expect(question.innerHTML).toEqual(QUESTIONS[n].question);
    for (let i = 0; i < 4; i++) {
      expect(options[i].innerText).toEqual(QUESTIONS[n].options[i]);
    };
  });
  test("disabled attribute is added to the nextbutton", () => {
    newQuestion();
    expect(document.getElementById("next").hasAttribute("disabled")).toBeTruthy();
  });
  test("class hidden is removed from option container id element to enable options to display", () => {
    newQuestion();
    expect(document.getElementById("option-container").classList).toEqual(expect.not.stringContaining("hidden"));
  });
  test("if the last question is reached, hide next buttons and show submit button", () => {
    newQuestion(n);
    if (n == QUESTIONS.length - 1) {
      expect(document.getElementById("submit").style.display).toBe("inline-block");
      expect(document.getElementById("next").classList).toContain("hidden");
    };
  });
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