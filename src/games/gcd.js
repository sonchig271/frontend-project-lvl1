import playGame, { roundsCount } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};
const gameGCD = () => {
  const questions = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomInt(1, 20);
    const secondNumber = getRandomInt(1, 20);
    const question = `${firstNumber} ${secondNumber}`;
    const rightAnswer = getGCD(firstNumber, secondNumber).toString();
    questions.push({ question, rightAnswer });
  }
  playGame(rule, questions);
};

export default gameGCD;
