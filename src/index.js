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

export {compare, enterAnswer};