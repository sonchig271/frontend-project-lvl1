// задать вопрос, получить ответ, сравнить ответ и т.д
import readlineSync from 'readline-sync';

const game = (rule, questions, rightAnswers) => {
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}`);
  console.log(rule);
  let counter = 0;
  let result = true;
  while (result && counter < 3) {
    console.log(`Question: ${questions[counter]}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const isRight = answer === rightAnswers[counter].toString();
    if (isRight) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswers[counter]}'.
      Let's try again, ${name}!`);
      return;
    }
    counter += 1;
    if (counter === 3) console.log('Congratulations!');
  }
};

export default game;
