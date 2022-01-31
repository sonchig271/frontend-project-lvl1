import game, { rounds } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const signs = ['+', '-', '*'];
const rule = 'What is the result of the expression?';
const getRightAnswer = (firstNumber, secondNumber, sign) => {
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

const gameCalc = () => {
  const questions = [];
  for (let i = 0; i < rounds; i += 1) {
    const index = getRandomInt(0, 2);
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 10);
    const question = `${firstNumber} ${signs[index]} ${secondNumber} `;
    const rightAnswer = getRightAnswer(firstNumber, secondNumber, signs[index]).toString();
    questions.push({ question, rightAnswer });
  }
  game(rule, questions);
};
export default gameCalc;
