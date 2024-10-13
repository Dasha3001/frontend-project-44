#!/usr/bin/env node

import { enterAnswer, compare, gcd, breakCondition } from '../src/index.js';
import { name } from './brain-games.js';

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswers = 1;
  while (correctAnswers <= 3) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    const answer = enterAnswer(`${number1} ${number2}`);

    const correctAnswer = gcd(number1, number2);
    correctAnswers = compare(correctAnswer, answer, correctAnswers, name);

    if (breakCondition(correctAnswers, name)) {
      break;
    }
  }
};

brainGcd();
