#!/usr/bin/env node

import {enterAnswer, compare} from '../src/index.js';
import {name} from './brain-games.js';



const brainEven = () => {
    console.log('What number is missing in the progression?')
    let correctAnswers = 1
    while (correctAnswers <= 3) {
        let firstNumber = Math.round(Math.random() * 100)
        let diff = Math.round(Math.random() * 6) + 1;
        let i = 1 
        let range = [firstNumber]
        while (i<=10) {
            range.push(range.at(-1)+diff)
            i+=1;
        }
        let missedNumber = Math.round(Math.random() * 11)
        range[missedNumber] = '..'
        const answer =  enterAnswer(range.join(" "));


        let correctAnswer = range.indexOf('..') === 0? (range[range.indexOf('..')+1] - diff).toString() : (range[range.indexOf('..')-1] + diff).toString();

        correctAnswers = compare(correctAnswer, answer, correctAnswers, name);

        }

        console.log('Congratulations, ' + name + '!')
    }


    brainEven();