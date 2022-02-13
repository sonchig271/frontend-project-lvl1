import playGame, { roundsCount } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const gameEven = () => {
  const questions = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomInt(1, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    questions.push({ question, rightAnswer });
  }
  playGame(rule, questions);
};

export default gameEven;
