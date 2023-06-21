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
"BOLIVIA"] ;


/*----- state variables -----*/
let solution = " "; //random country
//let lives = 6; //amount of lives **icebox
let errors = 0; // incorrect guesses
let guesses = [];
let playerWord = null;



/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
randomC();
makeAlpha();
playerChoice();




function randomC() {
    solution = countries[Math.floor(Math.random() * countries.length )];
   
}
//console.log(solution) 
randomC();


//render keyboard
function makeAlpha() {

    let alphaHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>

        `<button
        class="btn btn-lg btn-primary m-2"
        id='${letter}'
        onclick="playerChoice(${letter})"
        >
        ${letter}
        </button>
        `).join('');

        document.getElementById('alpha').innerHTML = alphaHTML;
}
//loop runs whiles lives >=0
function playerChoice(letter) {
    guesses.indexOf(letter) === -1 ? guesses.push(letter) : null;
    document.getElementById(letter).setAttribute('disabled', true);
  
    if (solution.indexOf(letter) >= 0) {
      checkGuess();
      checkIfWinner();
    } else if (solution.indexOf(letter) === -1) {
      errors++;
      updateErrors();
      checkIfLoser();
      updatePic();
    }
  }
 
 
  //update Hangman pic if incorrect
function updatePic() {
    document.getElementById('')
  }

//
function checkIfWinner() {
     if (playerWord === solution) {
        document.getElementById('alpha').innerHTML = ' WINNER' ;
    }
}

function checkIfLoser() {
    if (errors === lives) {
    document.getElementById('wordLine')
   }

}



function checkGuess() {
  playerWord = solution.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordLine').innerHTML = playerWord;
}


document.getElementById('lives').innerHTML = lives;
































































