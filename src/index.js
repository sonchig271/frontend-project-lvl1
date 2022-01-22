// задать вопрос, получить ответ, сравнить ответ и т.д
import readlineSync from 'readline-sync';

const game = (question, name, rightAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase();
  const isRight = answer === rightAnswer.toString();
  if (isRight) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
    Let's try again, ${name}!`);
  }
  return isRight;
};

export default game;
