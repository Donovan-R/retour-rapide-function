//* Hoisting (levage)
//* les déclarions de fonction et de var sont "levées"
//* plus sécure d'y accéder après qu'elles soient initialisées

display();

function display() {
  console.log("hello");
}

console.log(random);
var random = "random";
// la var est déclarée après pourtant comprise

// cela n'est pas valable avec une const car initialisation à faire avant
const x = "déclare moi avant de mappeler";

// pareil avec let
let why = "déclare moi avant aussi!!";

function moreComplex() {
  console.log(`${x}, ${why}, ${random}`);
}
// cette fonction ne pourra pas être appelée avant l'initialisation du let et de la const
