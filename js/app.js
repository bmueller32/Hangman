/*----- constants -----*/
const countries = [
  "UNITED STATES",
  "MEXICO",
  "INDONESIA",
  "NEW ZEALAND",
  "SOUTH KOREA",
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

updatePic();
checkIfWinner();
checkIfLoser();
checkGuess();
updateErrors();

function randomC() {
  solution = countries[Math.floor(Math.random() * countries.length)];
}
//console.log(solution)
randomC();

//render keyboard
function makeAlpha() {
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

//loop runs whiles lives >=0
function playerGuess(guessLetter) {
  guesses.indexOf(guessLetter) === -1 ? guesses.push(guessLetter) : null;
  document.getElementById(guessLetter).setAttribute("disabled", true);

 if (solution.indexOf(guessLetter) >= 0) {
    checkGuess();
    checkIfWinner();
  } else if (solution.indexOf(guessLetter) === -1) {
    errors++; // add one to errors
    updateErrors();
    checkIfLoser();
    updatePic();
  }
}

//check player letter input
function checkGuess() {
  playerWord = solution
    .split("")
    .map((letter) => (guesses.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

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

//update Hangman pic if incorrect
function updatePic() {
  document.getElementById("");
}
updatePic();

//check if correct input
function checkIfWinner() {
  if (playerWord === solution) {
    document.getElementById("alpha").innerHTML = " WINNER";
  }
}

//check if incorrect input
function checkIfLoser() {
  if (errors === lives) {
    document.getElementById("wordLine");
    document.getElementById("alpha").innerHTML = "LOSER";
  }
}

//add pictures !!!
function newGame() {
  errors = 0;
  guesses = [];
  document.getElementById("pic").src = "";

  randomC();
  checkGuess();
  updateErrors();
  makeAlpha();
}
