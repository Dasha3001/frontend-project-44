#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {name} from './brain-games.js';



const brainEven = () => {
    console.log('What is the result of the expression?')
    let correctAnswers = 1
    while (correctAnswers <= 3) {
        let number1 = Math.round(Math.random() * 100)
        let number2 = Math.round(Math.random() * 100)
        let actions = ['+', '-', '*']
        let actionsChosen = actions[Math.floor(Math.random() * 3)]
        console.log('Question: ' + number1 + actionsChosen + number2)
        const answer = readlineSync.question('Your answer: ');

        let correctAnswer;
        switch (actionsChosen) {
        case '+':
            correctAnswer = number1 + number2;
            break;
        case '-':
            correctAnswer = number1 - number2;
            break;
        case '*':
            correctAnswer = number1 * number2;
            break;
        }

        if (correctAnswer === Number(answer)) {
        correctAnswers += 1;
        console.log('Correct!');
        } 
        else {
        correctAnswers = 1;
        console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + correctAnswer + ". Let's try again, " + name + "!");
        }
    }

  console.log('Congratulations, ' + name + '!');
};

brainEven();