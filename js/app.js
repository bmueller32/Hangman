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
newGame()


// select random country from array
function randomC() {
  solution = countries[Math.floor(Math.random() * countries.length)];
}

randomC();

//render alphabet
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
function playerGuess(evt) {
  guesses.push(evt.toUpperCase())
  console.log(evt)
  document.getElementById(evt).setAttribute('disabled', true);
  console.log(solution.indexOf(evt.toUpperCase()))
 if (solution.indexOf(evt.toUpperCase()) >= 0) {
    checkGuess(evt.toUpperCase());
    checkIfWinner();
  } else if (solution.indexOf(evt.toUpperCase()) === -1) {
    errors++; // add one to errors
    updateErrors();
    checkIfLoser();
    updatePic();
  }
}

//update Hangman pic if incorrect
function updatePic() {
  document.getElementById("man").src = './Images/' + 'Hangman00' + '.png' ;
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
    document.getElementById("alpha").innerHTML = "Someone doesnt know their Geography ";
  }
}

//check player letter input
function checkGuess(letter) {
  playerWord = solution.split("").map((letter) => (guesses.indexOf(letter) >= 0 ? letter : " _ ")).join("");
console.log(playerWord,'this is a player word')
  document.getElementById("wordLine").innerHTML = playerWord;
}
checkGuess();
//update lives
function updateErrors() {
  document.getElementById("errors").innerHTML = errors;
}
updateErrors();

//add pictures !!!
function newGame() {
  errors = 0;
  guesses = [];
  document.getElementById("man").src = "./Images/Hangman00.png ";

  randomC();
  checkGuess();
  updateErrors();
  makeAlpha();
}
//connect lives: with HTML
document.getElementById("lives").innerHTML = lives;





