#!/usr/bin/env node

import {enterAnswer, compare, breakCondition} from '../src/index.js';
import {name} from './brain-games.js';



const brainPrime = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    let correctAnswers = 1
    while (correctAnswers <= 3) {
        let number = Math.floor(Math.random() * 99) + 2;
        const answer =  enterAnswer(number);


        let isPrime = () => { 
            for (let i = 2; i <= number/2; i+=1) {
                if (number % i === 0 && number != i) {
                    return 'no';
                }
            }
            return 'yes';
        }

        let correctAnswer = isPrime()
        

        correctAnswers = compare(correctAnswer, answer, correctAnswers, name);
        if (breakCondition(correctAnswers, name)) {
            break;
        };

    };
}


    brainPrime();