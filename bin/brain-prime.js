#!/usr/bin/env node

import { enterAnswer, compare, breakCondition } from '../src/index.js';
import name from './brain-games.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 1;
  while (correctAnswers <= 3) {
    const number = Math.floor(Math.random() * 98) + 2;
    const answer = enterAnswer(number);

    const correctAnswer = isPrime(number);

    correctAnswers = compare(correctAnswer, answer, correctAnswers, name);
    if (breakCondition(correctAnswers, name)) {
      break;
    }
  }
};

brainPrime();
