let randomNumber = Math.floor(Math.random() * 10 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener("click", (e)=> {
        e.preventDefault();

        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

const validateGuess = (guess)=> {
    if(guess == '' || guess < 1 || guess > 100 ) {
        alert('Please enter a valid Number');
    } else {
        prevGuess.push(guess);  
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, Random Number Was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

const checkGuess = (guess)=> {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Number is TOOO Low!`);
    } else if(guess > randomNumber) {
        displayMessage(`Number is TOOO High!`);
    }
};

const displayGuess = (guess)=> {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  ${"  "}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
};

const displayMessage = (message)=> {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`;
};

const endGame = ()=> {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    startOver.appendChild(p);
    
    playGame = false;
    newGame();
};

const newGame = ()=> {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", (e)=> {
        randomNumber = Math.floor(Math.random() * 10 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);

        playGame = true;
    });
};
