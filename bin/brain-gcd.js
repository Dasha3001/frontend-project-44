#!/usr/bin/env node

import {enterAnswer, compare, gcd, breakCondition} from '../src/index.js';
import {name} from './brain-games.js';


const brainGcd = () => {
    console.log('Find the greatest common divisor of given numbers.')
    let correctAnswers = 1
    while (correctAnswers <= 3) {
        let number1 = Math.round(Math.random() * 100)
        let number2 = Math.round(Math.random() * 100)
        let answer = enterAnswer(number1 + ' ' + number2)

        let correctAnswer = gcd(number1, number2);
        correctAnswers = compare(correctAnswer, answer, correctAnswers, name);

        if (breakCondition(correctAnswers, name)) {
            break;
        };

    };
};

brainGcd();