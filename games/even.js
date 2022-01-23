import game from '../src/index.js';

const getRandomInt = () => Math.floor(1 + Math.random() * 100);

const gameEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gameEven;
