/*----- constants -----*/
const countries = {
"UNITED STATES",
"MEXICO",
"INDONESIA",
"NEW ZEALAND",
"SOUTH KOREA",
"NORWAY",
"GREENLAND",
"MONGOLIA",
"THAILAND",
"BOLIVIA"

}

/*----- state variables -----*/
let solution = " ";
let lives = 6;
let incorrect = 0;




/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
//initiate variable lives
init();




function randomC() {
solution = countries = Math.floor(Math.random() * countries.length )

}
console.log( randomC, countries[randomC])
randomC();














































































