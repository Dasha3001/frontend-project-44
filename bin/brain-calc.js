#!/usr/bin/env node

import {enterAnswer, compare, breakCondition} from '../src/index.js';
import {name} from './brain-games.js';


const brainEven = () => {
    console.log('What is the result of the expression?')
    let correctAnswers = 1
    while (correctAnswers <= 3) {
        let number1 = Math.round(Math.random() * 100)
        let number2 = Math.round(Math.random() * 100)
        const actions = ['+', '-', '*']
        let actionsChosen = actions[Math.floor(Math.random() * 3)]
        let answer = enterAnswer(number1 + ' ' + actionsChosen + ' ' + number2)

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
        }

        correctAnswers = compare(correctAnswer, answer, correctAnswers, name);

        if (breakCondition(correctAnswers, name)) {
            break;
        };
    };
};

brainEven();