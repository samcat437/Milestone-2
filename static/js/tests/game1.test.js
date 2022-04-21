/**
 * @jest-environment jsdom
 */

const { beforeEach, test, expect, beforeAll } = require("@jest/globals");

const {startGame, readyQuestion, newQuestion} = require("../game1");

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
  test("disabled attribute is added to the check button" , () => {
    expect(document.getElementById("check").hasAttributes).toContain("disabled");
  });
});