#!/usr/bin/env node

import { enterAnswer, compare, breakCondition } from '../src/index.js';
import name from './brain-games.js';

const brainEven = () => {
  console.log('What is the result of the expression?');
  let correctAnswers = 1;
  while (correctAnswers <= 3) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    const actions = ['+', '-', '*'];
    const actionsChosen = actions[Math.floor(Math.random() * 3)];
    const answer = enterAnswer(`${number1} ${actionsChosen} ${number2}`);

    let correctAnswer;
    switch (actionsChosen) {
      case '+':
        correctAnswer = (number1 + number2).toString();
        break;
      case '-':
        correctAnswer = (number1 - number2).toString();
        break;
      case '*':
        correctAnswer = (number1 * number2).toString();
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
