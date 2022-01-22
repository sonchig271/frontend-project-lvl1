#!/usr/bin/env node

import greet from '../src/cli.js';
import game from '../src/index.js';

const getRandomInt = () => Math.floor(1 + Math.random() * 100);

const gameEven = () => {
  const name = greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  let result = true;
  while (result && counter < 3) {
    counter += 1;
    const question = getRandomInt();
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    result = game(question, name, rightAnswer);
  }
  if (counter === 3) console.log('Congratulations!');
};

gameEven();
