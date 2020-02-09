var randomNumber = Math.floor(Math.random() * 99) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton = document.querySelector('#reset');

var totalWins = 0;
var totalLosses = 0;
guessField.focus();
resetButton.style.display = 'none';


function checkGuess() {
    var userGuess = Number(guessField.value);
    if(userGuess >= 100) {
        guesses.innerHTML = "Error! That number is too high";
    }
    else if(isNaN(parseFloat(userGuess))) {
        guesses.innerHTML = "Error! Your input is not a number";
    } 
    else {
        if(guessCount == 1) {
            guesses.innerHTML = 'Previous guess: ';
        }
        guesses.innerHTML += userGuess + ' ';
        
        if(userGuess === randomNumber) {
            lastResult.innerHTML = 'Congratulations! You got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.innerHTML = '';
            totalWins += 1;
            setGameOver();
        } else if(guessCount === 7) {
            lastResult.innerHTML = 'Sorry, you lost!'
            totalLosses += 1;
            setGameOver();
        } else {
            lastResult.innerHTML = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
            if(userGuess < randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too low!';
            } else if(userGuess > randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too high!';
            }
        }
        
        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
    
    console.log(totalLosses);
    console.log(totalWins);
    updateLosses();
    updateWins();
}

function resetGame() {
    guessCount = 1;
    
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    
    resetButton.style.display = 'none';
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white';
    
    randomNumber = Math.floor(Math.random() * 99) + 1;
}

function updateLosses() {
    document.getElementById('lossCount').innerHTML = totalLosses;
}

function updateWins() {
    document.getElementById('winCount').innerHTML = totalWins;
}