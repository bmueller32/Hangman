/*----- constants -----*/
const countries = [
  "CANADA",
  "MEXICO",
  "INDONESIA",
  "AUSTRALIA",
  "AFGANISTAN",
  "NORWAY",
  "GREENLAND",
  "MONGOLIA",
  "THAILAND",
  "BOLIVIA",
];

/*----- state variables -----*/
let solution = " "; //random country
let lives = 6; // number of guesses
let errors = 0; // incorrect guesses
let guesses = []; // player letters
let playerWord = null;

/*----- cached elements  -----*/

/*----- event listeners -----*/

/*----- functions -----*/
randomC();
makeAlpha();
checkIfWinner();
checkIfLoser();
checkGuess();
updateErrors();



// select random country from array
function randomC() {
  //correctword = array[rounds down to whole number(returns random number) x length of countries array)]
  solution = countries[Math.floor(Math.random() * countries.length)];
}

randomC();

//render alphabet
function makeAlpha() {
  // split string into an array of substrings ('') seperates words, map() creates new array with with results of calling the function,join()creates new string by concatenating all of the elements in an array
  let alphaHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
      `
        <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onclick="playerGuess('` + letter + `')"
        >
         ` + letter + `
        </button>
        `).join(""); //get rid of commas

  //connect with HTML
  document.getElementById("alpha").innerHTML = alphaHTML;
}

// if the letter clicked by player(evt) is included (indexOf()) in the SOLUTION then the letter is set(toUpperCase()) and push() into the array, which calls checkGuess() and checkIfWinner. Else if the letter is not included(indexOf()) in the SOLUTION an ERROR is added ++ , updateErrors() and checkIfLoser() are called.
function playerGuess(evt) {
  guesses.push(evt.toUpperCase())
  document.getElementById(evt).setAttribute('disabled', true);
  console.log(solution.indexOf(evt.toUpperCase()))
 if (solution.indexOf(evt.toUpperCase()) >= 0) {
    checkGuess(evt.toUpperCase());
    checkIfWinner();
  } else if (solution.indexOf(evt.toUpperCase()) === -1) {
    errors++; // add one to errors
    updateErrors();
    checkIfLoser();
  }
}

//check if correct input does playerWord===solution if so print winner
function checkIfWinner() {
  if (playerWord === solution) {
    document.getElementById("alpha").innerHTML = " WINNER";
  }
}

//check if incorrect input if errors ===lives then game over
function checkIfLoser() {
  if (errors === lives) {
    document.getElementById("wordLine");
    document.getElementById("alpha").innerHTML = "Someone doesnt know their Geography ";
  }
}

//if player letter = to letter in solution then add letter if not -1 and ( _ )
function checkGuess(letter) {
  playerWord = solution.split("").map((letter) => (guesses.indexOf(letter) >= 0 ? letter : " _ ")).join("");
 //defines player word/ if letter correct prints to wordline
  document.getElementById("wordLine").innerHTML = playerWord;
}
checkGuess();

//update lives
function updateErrors() {
  document.getElementById("errors").innerHTML = errors;
}
updateErrors();

//connect lives: with HTML
document.getElementById("lives").innerHTML = lives;

// new game= reset
function newGame() {
  errors = 0;
  guesses = [];
  

  randomC();
  checkGuess();
  updateErrors();
  makeAlpha();
}






