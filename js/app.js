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
//initiate variable lives ** icebox
//init();
randomC();
makeAlpha();


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
        onclick="handleGuess(${letter})"
        >
        ${letter}
        </button>
        `).join('');

        document.getElementById('alpha').innerHTML = alphaHTML;
}


function checkGuess() {
  playerWord = solution.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById().innerHTML = playerWord;
}


document.getElementById('lives').innerHTML = lives;
































































