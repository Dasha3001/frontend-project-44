#!/usr/bin/env node

import {enterAnswer, compare} from '../src/index.js';
import {name} from './brain-games.js';



const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let correctAnswers = 1
    while (correctAnswers <= 3) {
        let number = Math.round(Math.random() * 100)
        const answer =  enterAnswer(number);


        let correctAnswer;
        switch (number % 2) {
        case 0:
            correctAnswer = 'yes';
            break;
        case 1:
            correctAnswer = 'no';
            break;
        };

        correctAnswers = compare(correctAnswer, answer, correctAnswers, name);

        }

        console.log('Congratulations, ' + name + '!')
    }


    brainEven();