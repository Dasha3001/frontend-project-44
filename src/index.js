import readlineSync from 'readline-sync';

const enterAnswer = (questionValue) => {
    console.log('Question: ' + questionValue)
    const answer = readlineSync.question('Your answer: ');
    return answer;
}


const compare = (correctAnswer, answer, correctAnswers, name) => {
    if (correctAnswer === answer) {
        correctAnswers += 1; 
        console.log('Correct!');
    }
    else {
        correctAnswers = 1;
        console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + correctAnswer + ". Let's try again, " + name + "!");
    }
    return correctAnswers;
}

const gcd = (number1, number2) => {
    if(number1>=number2) {
        let correctAnswer = number2
        while(correctAnswer>0) {
            if (number1%correctAnswer === 0 && number2%correctAnswer === 0) {
                return correctAnswer.toString();
            }
        correctAnswer -= 1; 
        }
    }
    else {
        let correctAnswer = number1
        while(correctAnswer>0) {
            if (number1 % correctAnswer === 0 && number2 % correctAnswer === 0) {
                return correctAnswer.toString();
            }
        correctAnswer -= 1; 
        }
        }
}
export {compare, enterAnswer, gcd};