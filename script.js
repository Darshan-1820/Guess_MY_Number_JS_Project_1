'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!!';

console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = '7';

document.querySelector('.guess').value = 15
console.log(document.querySelector('.guess').value);
*/

// ================ GAME LOGIG =============================

// Generating a Random number whenever the browser loads.
let newNumber = Math.trunc(Math.random()*20)+1;  // Math.random() generates random number between 0 and 1, like, 0.7, 0.4832. Math.trunc() removes the floating point value.
// document.querySelector('.number').textContent = newNumber;

// Score 
let score = 20;

// HighScore
let highScore = 0;

const message = document.querySelector('.message').textContent;
const oldNumber = document.querySelector('.number').textContent;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//============= When the User press Check Button! ==========================

document.querySelector('.check').addEventListener(
    'click', function(){
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        
        // When the user doesn't enter any number || guess = 0
        if(!guess){
            displayMessage('⛔ No Number!');
        }
        else if(guess === newNumber){              //========= When the user guesses the number correctly ===========
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = newNumber;

            // ================ Setting High Score ========================
            if(score>highScore) highScore = score;
            document.querySelector('.highscore').textContent = highScore;

            // Changing the CSS
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        }
        else if(guess !== newNumber) {                               //======== When the guess is wrong ==========
            
            if(score>1){
                displayMessage(guess > newNumber ? '📈 Too High!' : '📉 Too Low!');
                score--;
                document.querySelector('.score').textContent = score;  
            }else{
                displayMessage(`💥 You lost the game!`);
                document.querySelector('.score').textContent = 0;
                document.querySelector('.number').textContent = newNumber;
                // Changing the CSS
                document.querySelector('body').style.backgroundColor = '#BB3B0E';
            }
        }
        // else if(guess > newNumber){              // When the user guesses a number higher than the number generated.                              
        //     if(score>1){
        //         document.querySelector('.message').textContent = '📈 Too High!';
        //         score--;
        //         document.querySelector('.score').textContent = score;  
        //     }else{
        //         document.querySelector('.message').textContent = `💥 You lost the game!`;
        //         document.querySelector('.score').textContent = 0;
        //         document.querySelector('.number').textContent = newNumber;
        //         // Changing the CSS
        //         document.querySelector('body').style.backgroundColor = '#BB3B0E';
        //     }
        // }
        // else if(guess < newNumber){             // When the user guesses a number lower than the generated number.
        //     if(score>1){
        //         document.querySelector('.message').textContent = '📉 Too Low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }else{
        //         document.querySelector('.message').textContent = `💥 You lost the game!`;
        //         document.querySelector('.score').textContent = 0;
        //         document.querySelector('.number').textContent = newNumber;
        //         // Changing the CSS
        //         document.querySelector('body').style.backgroundColor = '#BB3B0E';
        //     }
        // }
        // ======================= These highlighted codes are refactored above(line 56 - 69) to make the code more DRY ======================
})


//========================== When the user press Again Button! ============================
document.querySelector('.again').addEventListener('click', function(){

    // Changing the background color to default
    document.querySelector('body').style.backgroundColor = '#222';

    // Changing the width of the container back to original width
    document.querySelector('.number').style.width = '15rem';
    
    // Resetting the score to 0
    score = 20;
    document.querySelector('.score').textContent = score;
    
    // Generating a new Random number
    newNumber = Math.trunc(Math.random()*20 + 1);

    // Resetting the message to default message
    displayMessage(message);

    // Hiding the Secret Number
    document.querySelector('.number').textContent = oldNumber;

    // Resetting the guess(User input to empty string);
    document.querySelector('.guess').value = ''; 
})

