/**
 * @jest-environment jsdom
 */

const { beforeEach, test, expect, beforeAll } = require("@jest/globals");

const {startGame} = require("../game1");

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
  test("newQuestion function is called", () => {
    startGame();
    const newQuestion = jest.fn();
    expect(newQuestion).toHaveBeenCalled();
  });
});