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
let lives = 6; //amount of lives 
let errors = 0;
let guesses = [];




/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
//initiate variable lives
//init();
randomC()



function randomC() {
    solution = countries[Math.floor(Math.random() *countries.length )];
   
}
console.log(solution) 















































































