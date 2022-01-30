import game from '../index.js';
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
      return null;
  }
};
const gameCalc = () => {
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const index = getRandomInt(0, 2);
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 10);
    const question = `${firstNumber} ${signs[index]} ${secondNumber} `;
    const rightAnswer = getRightAnswer(firstNumber, secondNumber, signs[index]);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};
export default gameCalc;
