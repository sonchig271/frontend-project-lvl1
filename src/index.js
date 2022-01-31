// задать вопрос, получить ответ, сравнить ответ и т.д
import readlineSync from 'readline-sync';

export const rounds = 3;
const game = (rule, questions) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(rule);
  let counter = 0;
  while (counter < rounds) {
    console.log(`Question: ${questions[counter].question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isRight = answer === questions[counter].rightAnswer;
    if (isRight) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questions[counter].rightAnswer}'.
      Let's try again, ${name}!`);
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
