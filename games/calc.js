import readlineSync from 'readline-sync';
import game from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(min + Math.random() * max);
const signs = ['+', '-', '*'];

const gameCalc = () => {
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}`);
  const rule = 'What is the result of the expression?';
  // let counter = 0;
  // for (let i = 0; i < 3; i += 1) {
  //   counter += 1;
  //   const index = getRandomInt(0, 2);
  //   const firstNumber = getRandomInt(1, 100);
  //   const secondNumber = getRandomInt(1, 10);
  //   const question = `${firstNumber} ${signs[index]} ${secondNumber} `;
  //   let rightAnswer;
  //   if (index === 0) {
  //     rightAnswer = firstNumber + secondNumber;
  //   } else if (index === 1) {
  //     rightAnswer = firstNumber - secondNumber;
  //   } else if (index === 2) {
  //     rightAnswer = firstNumber * secondNumber;
  //   }
  // }
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, question, rightAnswer);

};
export default gameCalc;
