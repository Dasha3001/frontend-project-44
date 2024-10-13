#!/usr/bin/env node

import { enterAnswer, compare, breakCondition } from '../src/index.js';
import { name } from './brain-games.js';

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let correctAnswers = 1;
  while (correctAnswers <= 3) {
    const firstNumber = Math.round(Math.random() * 100);
    const diff = Math.round(Math.random() * 6) + 1;
    let i = 1;
    const range = [firstNumber];
    while (i <= 10) {
      range.push(range[i - 1] + diff);
      i += 1;
    }
    const missedIndex = Math.round(Math.random() * 10);
    range[missedIndex] = '..';
    const answer = enterAnswer(range.join(' '));

    const correctAnswer = range.indexOf('..') === 0
      ? (range[1] - diff).toString()
      : (range[missedIndex - 1] + diff).toString();

    correctAnswers = compare(correctAnswer, answer, correctAnswers, name);

    if (breakCondition(correctAnswers, name)) {
      break;
    }
  }
};

brainProgression();
