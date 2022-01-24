import game from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(min + Math.random() * max);
const getProgression = (start, step, missedIndex) => {
  const progression = [start];
  let num = start;
  let missed;
  for (let i = 0; i < 9; i += 1) {
    num += step;
    if (i === missedIndex) {
      progression.push('..');
      missed = num;
    } else {
      progression.push(num);
    }
  }
  return [progression.join(' '), missed];
};
const gameProgression = () => {
  const rule = 'What number is missing in the progression?';
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const index = getRandomInt(1, 8);
    const [question, rightAnswer] = getProgression(getRandomInt(1, 20), getRandomInt(2, 9), index);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gameProgression;
