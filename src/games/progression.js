import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'What number is missing in the progression?';

const getMissingTerm = (start, step, index) => start + step * index;

const getProgression = (start, step, missedIndex) => {
  const progression = [];
  for (let i = 0; i < 9; i += 1) {
    const currentEl = getMissingTerm(start, step, i);
    if (i === missedIndex) {
      progression.push('..');
    } else {
      progression.push(currentEl);
    }
  }
  return progression.join(' ');
};

const gameProgression = () => {
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const index = getRandomInt(1, 8);
    const step = getRandomInt(2, 9);
    const start = getRandomInt(1, 20);
    const question = getProgression(start, step, index);
    const rightAnswer = getMissingTerm(start, step, index);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gameProgression;
