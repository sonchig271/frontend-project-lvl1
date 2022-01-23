import readlineSync from 'readline-sync';
import game from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(min + Math.random() * max);
const signs = ['+', '-', '*'];

const gameCalc = () => {
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');
  let counter = 0;
  let result = true;
  while (result && counter < 3) {
    counter += 1;
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
    result = game(question, name, rightAnswer);
  }
  if (counter === 3) console.log('Congratulations!');
};
export default gameCalc;
