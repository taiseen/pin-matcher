const generatePin = document.getElementById('generatePin');
const pinDisplay = document.getElementById('pinDisplay');

const userInputDisplay = document.getElementById('userInput');
const submitButton = document.getElementById('submitBtn');

const incorrectPin = document.getElementById('incorrect_pin');
const correctPin = document.getElementById('correct_pin');

const matchAttempt = document.getElementById('attempt');

// Use by Event Bubble
const allNumbers = document.getElementById('numbers_container');

//const allButtons = document.getElementsByClassName('button');

var attempts = 3;

/* 
let fullUserInput = '';
for (singleButton of allButtons) {

    // single button click Listener...
    singleButton.addEventListener('click', (event) => {

        // get the button inside text
        let buttonText = event.target.innerText;

        fullUserInput = fullUserInput + buttonText;
        userInputDisplay.value = fullUserInput;

    });
} 
*/

// Learn New Concept
// Help of Event Bubble 
// Perform Operation at Parent Element & get all targeted Child Elements
allNumbers.addEventListener('click', (event) => {

    // get the button inside text
    let number = event.target.innerText;

    if (isNaN(number)) {

        // Clear Number & Back Space
        if (number === 'C') {
            userInputDisplay.value = '';
        } else {
            // Learn New Concept
            let backSpace = userInputDisplay.value;
            userInputDisplay.value = backSpace.substr(0, backSpace.length - 1);
        }

    } else {
        // Learn New Concept
        userInputDisplay.value = userInputDisplay.value + number;
    }


})

// Display Generated Pin as Output
generatePin.addEventListener('click', () => {
    pinDisplay.value = randomNumberGenerator();
})

function randomNumberGenerator() {

    let randomNumber = Math.round(Math.random() * 10000);

    // Learn New Concept
    if (randomNumber.toString().length === 4) {
        return randomNumber;
    } else {
        return randomNumberGenerator();
    }
}


submitButton.addEventListener('click', (event) => {

    // Stop Bubble Effect Here | Very Important
    // Learn New Concept
    event.stopPropagation();

    if (pinDisplay.value == userInputDisplay.value && userInputDisplay.value != '') {
        displayStatus('block', 'none');        
    } else {
        displayStatus('none', 'block');
        loginAttempts();
    }

})

// Learn New Concept
function displayStatus(currentStatus, incurrentStatus) {
    correctPin.style.display = currentStatus;
    incorrectPin.style.display = incurrentStatus;
}


// Learn New Concept
function loginAttempts() {
    
    attempts--;
    
    if (attempts >= 0) {
        matchAttempt.innerText = attempts
    }

    if(attempts == 0){
        // window.close();
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#10101B';
        
    }
}

