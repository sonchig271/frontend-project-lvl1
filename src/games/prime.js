import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const gamePrime = () => {
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gamePrime;
