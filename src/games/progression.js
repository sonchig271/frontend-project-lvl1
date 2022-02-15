import playGame, { roundsCount } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rule = 'What number is missing in the progression?';

const getProgressionTerm = (start, step, index) => start + step * index;
const progressionLength = 9;

const getProgression = (start, step, missedIndex, length = progressionLength) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const currentEl = getProgressionTerm(start, step, i);
    progression.push(i === missedIndex ? '..' : currentEl);
  }
  return progression.join(' ');
};

const playProgression = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const index = getRandomInt(1, progressionLength - 1);
    const step = getRandomInt(2, 9);
    const start = getRandomInt(2, 9);
    const question = getProgression(start, step, index);
    const rightAnswer = getProgressionTerm(start, step, index).toString();
    rounds.push({ question, rightAnswer });
  }
  playGame(rule, rounds);
};

export default playProgression;
