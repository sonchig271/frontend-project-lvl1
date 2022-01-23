import game from '../src/index.js';

const getRandomInt = () => Math.floor(1 + Math.random() * 100);

const gamePrime = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97];
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const rightAnswer = primeNumbers.includes(question) ? 'yes' : 'no';
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }
  game(rule, questions, rightAnswers);
};

export default gamePrime;
