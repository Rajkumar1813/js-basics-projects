
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}




// // genrate a random number
// let randomNumber = Math.floor(Math.random()*100 +1);

// // variables
// const userGuess = document.getElementById('userInput');
// const btn = document.querySelector('#btn');
// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const resultParas = document.querySelector('.resultParas');

// // create elements
// let p = document.createAttribute('p');

// // create empty array
// let arrGuess = [];
// let numGuess = 1; //  counter ---*


// let playGame = ture;


// if (playGame) {
//     btn.addEventListener('click',(e)=>{
//         e.preventDefault();
//         const userValue = parseInt(userGuess.value);
//         validateGuess(userValue);
//     });
// };

// // validate guess
// function validateGuess(params) {
//     if (params < 1) {
//         alert('Please enter a vaild number.')
//     } else if(params > 100){
//         alert('Please enter value under 1 rto 100 !');
//     }else{
//         arrGuess.push(userValue);
//         if (numGuess === 11) {
//             displayGuess(params);
//             displayMessage(`Game over. Random number was ${randomNumber}`);
//             endGame();
//         }else{
//             displayGuess(params);
//             checkGuess(params);
//         }
//     }
// };

// // check guess
// function checkGuess(params) {
//     if (params === randomNumber) {
//         displayMessage(`You guessed it Right.`);
//         endGame();
//     }else if(params < randomNumber){
//         displayMessage(`Number is Tooo low...!`)
//     }else if(params > randomNumber){
//         displayMessage(`Number is Tooo High...!`)
//     }
// };

// // display guess
// function displayGuess(params) {
//     userGuess.value = '';
//     guesses.innerHTML += `${params}`;
//     numGuess++;
//     lastResult.innerHTML = `${11 - numGuess}`;
// };

// // display messages
// function displayMessage(params) {
//     lowOrHi.innerHTML = `<h2>${params}</h2>`
// };

// // end game fun
// function endGame() {
//     userGuess.value = '';
//     userGuess.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
//     resultParas.appendChild(p);
//     playGame = false;
//     newGame();
// };

// // new game fun
// function newGame(params) {
//     const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', (e)=> {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     arrGuess = [];
//     numGuess = 1;
//     guesses.innerHTML = '';
//     lastResult.innerHTML = `${11 - numGuess} `;
//     userGuess.removeAttribute('disabled');
//     resultParas.removeChild(p);

//     playGame = true;
//   });
// };
