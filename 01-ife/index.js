//* IIFE Immediately-Invoked Function Expression
//* c'est une ancienne approche - maintenant on utilise les Modules
//* une approche simple pour éviter la pollution du scope globale
//* une bonne façon de protéger le scope de la fonction and les variables à l'intérieur

const num1 = 36;
const num2 = 52;

function add() {
  console.log(`le résultat est ${num1 + num2}`);
}

// add()

(function () {
  const num3 = 36;
  const num4 = 52;
  console.log(`le résultat est ${num3 + num4}`);
})();

(function (num1, num2) {
  console.log(`le résultat est ${num1 + num2}`);
})(50, 30);

const result = (function (num1, num2) {
  return num1 + num2;
})(500, 50);

console.log("result", result);
