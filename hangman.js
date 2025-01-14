// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let wins = 0;
let lost = 0;
console.log("H A N G M A N");

while (true) {
    let menu = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`);

    if (menu === 'play') {
        play();
        continue;
    }

    if (menu === 'exit') {
        break;
    }

    if (menu === 'results') {
        console.log(`You won: ${wins} times.`);
        console.log(`You lost: ${lost} times.`);
        continue;
    }

}

function play() {
    const words = ['python', 'java', 'swift', 'javascript'];
    const index = Math.floor(Math.random() * words.length);
    const correctWord = words[index];

    let hint = '-'.repeat(correctWord.length);

    let attempts = '';

    while (attempts.length < 8) {

        console.log();
        console.log(hint);

        let letter = input("Input a letter:");
        if (letter.length !== 1) {
            console.log("Please, input a single letter.");
            continue;
        }
        if (!(letter >= 'a' && letter <= 'z')) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
            continue;
        }

        if (attempts.indexOf(letter) >= 0 || hint.indexOf(letter) >= 0) {

            console.log("You've already guessed this letter.");
            //attempts = attempts + letter;
            continue;
        }


        if (correctWord.indexOf(letter) >= 0) {


            let newHint = '';

            for (let j = 0; j < hint.length; j++) {
                if (hint[j] === '-') {
                    if (correctWord[j] === letter) {
                        newHint = newHint + letter;
                    } else {
                        newHint = newHint + '-';
                    }
                } else {
                    newHint = newHint + hint[j];
                }
            }

            hint = newHint;
        } else {
            attempts = attempts + letter;
            console.log("That letter doesn't appear in the word.");
        }

        if (hint === correctWord) {
            console.log("You guessed the word " + hint + "!");
            break;
        }
    }

    if (attempts.length >= 8) {
        lost++;
        console.log("You lost!");
    } else {
        wins++;
        console.log("You survived!");
    }
}









