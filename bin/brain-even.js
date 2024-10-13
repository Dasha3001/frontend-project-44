#!/usr/bin/env node

import { enterAnswer, compare, breakCondition } from '../src/index.js';
import { name } from './brain-games.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 1;
  while (correctAnswers <= 3) {
    const number = Math.round(Math.random() * 100);
    const answer = enterAnswer(number);

    let correctAnswer;
    switch (number % 2) {
      case 0:
        correctAnswer = 'yes';
        break;
      case 1:
        correctAnswer = 'no';
        break;
      default:
        break;
    }

    correctAnswers = compare(correctAnswer, answer, correctAnswers, name);

    if (breakCondition(correctAnswers, name)) {
      break;
    }
  }
};

brainEven();
