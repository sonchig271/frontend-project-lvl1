import game, { rounds } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRightAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');
const gameEven = () => {
  const questions = [];
  for (let i = 0; i < rounds; i += 1) {
    const question = getRandomInt(1, 100);
    const rightAnswer = getRightAnswer(question);
    questions.push({ question, rightAnswer });
  }
  game(rule, questions);
};

export default gameEven;
