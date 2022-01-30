import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'What number is missing in the progression?';

const getProgression = (start, step, missedIndex) => {
  const progression = [start];
  let num = start;
  for (let i = 0; i < 9; i += 1) {
    num += step;
    if (i === missedIndex) {
      progression.push('..');
    } else {
      progression.push(num);
    }
  }
  return progression.join(' ');
};
const getMissingTerm = (start, step, index) => start + step * (index);

const gameProgression = () => {
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const index = getRandomInt(1, 8);
    const question = getProgression(getRandomInt(1, 20), getRandomInt(2, 9), index);
    const rightAnswer = getMissingTerm(getRandomInt(1, 20), getRandomInt(2, 9), index);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gameProgression;
