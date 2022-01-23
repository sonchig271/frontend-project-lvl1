import readlineSync from 'readline-sync';
import game from '../src/index.js';

const getRandomInt = () => Math.floor(1 + Math.random() * 100);
const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};
const gameGCD = () => {
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}`);
  const rule = 'Find the greatest common divisor of given numbers.';
  let counter = 0;
  let result = true;
  while (result && counter < 3) {
    counter += 1;
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const question = `${firstNumber} ${secondNumber}`;
    const rightAnswer = getGCD(firstNumber, secondNumber);
    result = game(rule, question, rightAnswer);
  }
  if (counter === 3) console.log('Congratulations!');
};

export default gameGCD;
