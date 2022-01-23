import game from '../src/index.js';

const getRandomInt = () => Math.floor(1 + Math.random() * 20);
const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};
const gameGCD = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const question = `${firstNumber} ${secondNumber}`;
    const rightAnswer = getGCD(firstNumber, secondNumber);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gameGCD;
