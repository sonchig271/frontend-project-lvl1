import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}`);
};
export default greet;
