import playGame, { roundsCount } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const signs = ['+', '-', '*'];
const rule = 'What is the result of the expression?';
const calculate = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Wrong sign');
  }
};

const playCalc = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const index = getRandomInt(0, signs.length - 1);
    const firstNumber = getRandomInt(1, 10);
    const secondNumber = getRandomInt(1, 10);
    const question = `${firstNumber} ${signs[index]} ${secondNumber} `;
    const rightAnswer = calculate(firstNumber, secondNumber, signs[index]).toString();
    rounds.push({ question, rightAnswer });
  }
  playGame(rule, rounds);
};
export default playCalc;
