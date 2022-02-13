// задать вопрос, получить ответ, сравнить ответ и т.д

import readlineSync from 'readline-sync';

export const roundsCount = 3;
const playGame = (rule, rounds) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(rule);
  // eslint-disable-next-line no-restricted-syntax
  for (const question of rounds) {
    console.log(`Question: ${question.question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isRight = answer === question.rightAnswer;
    if (isRight) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.rightAnswer}'.
      Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
