#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {name} from './brain-games.js';



const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let correctAnswers = 1
    while (correctAnswers <= 3) {
        let number = Math.round(Math.random() * 100)
        console.log('Question: ' + number)
        const answer = readlineSync.question('Your answer: ');

        if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
            correctAnswers += 1; 
            console.log('Correct!');
        }
        else {
            correctAnswers = 1;
            console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was 'yes'. Let's try again, " + name + "!");
            }
        }

        console.log('Congratulations, ' + name + '!')
    }


    brainEven();