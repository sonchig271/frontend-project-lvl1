import game from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(min + Math.random() * max);
const signs = ['+', '-', '*'];

const gameCalc = () => {
  const rule = 'What is the result of the expression?';
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const index = getRandomInt(0, 2);
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 10);
    const question = `${firstNumber} ${signs[index]} ${secondNumber} `;
    let rightAnswer;
    if (index === 0) {
      rightAnswer = firstNumber + secondNumber;
    } else if (index === 1) {
      rightAnswer = firstNumber - secondNumber;
    } else if (index === 2) {
      rightAnswer = firstNumber * secondNumber;
    }
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};
export default gameCalc;
