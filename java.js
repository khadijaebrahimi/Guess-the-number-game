
//     'use strict';
// // document.querySelector('.number').textContent = 18;

// document.querySelector('.quess').value = 16;
// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// document.querySelector('.score').textContent = score;
// // document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.check').addEventListener('click', function () {
//     const guessNumber = Number(document.querySelector('.quess').value);
//     console.log(guessNumber)
//     if (!guessNumber) {
//         document.querySelector('.message').textContent = 'No Number';
//     }
//     //win
//     else if (secretNumber === guessNumber) {
//         document.querySelector('.message').textContent = 'Correct Guess!';
//         document.querySelector('body').style.backgroundColor = 'green';
//     } else if (secretNumber > guessNumber) {
//         if (score > 1){
//             document.querySelector('.message').textContent = 'Low Guess';
//         score--;
//         document.querySelector('.score').textContent = score;
//         }else {
//         document.querySelector('.message').textContent = 'You lost the game!!';
//         score = 0;
//         document.querySelector('.score').textContent = score;
//     }
// }
// //low
// else if (secretNumber < guessNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'High guess!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }else {
//              document.querySelector('.message').textContent = 'You lost the game!!';
//              score = 0 ;
//              document.querySelector('.score').textContent = score;
//         }
  
//     }
//     //high
//     else if (secretNumber < guessNumber ) {
//         if (score > 1 ) {
//              document.querySelector('.message').textContent = 'High guess!';
//              score -- ;
//               document.querySelector('.score').textContent = score;
//         }else {
//             document.querySelector('.message').textContent = 'You lost the game!!';
//             score =0;
//             document.querySelector('.score').textContent = score;
//         }
//     }
// });


    'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);
    console.log(guessNumber);

    if (!guessNumber) {
        displayMessage('No Number');
    } else if (guessNumber === secretNumber) {
        displayMessage('Correct Guess!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessNumber > secretNumber ? 'High Guess!' : 'Low Guess!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Reset game when clicking "Try Again!"
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function(){
score = 20;
document.querySelector('.score').textContent = score;
secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.message').textContent = 'Start Guessing!!';
document.querySelector('body').style.backgroundColor = 'white';

})