import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRightAnswer = (question) => {
  return question % 2 === 0 ? 'yes' : 'no';
};
const gameEven = () => {
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt(1, 100);
    const rightAnswer = getRightAnswer(question);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gameEven;
