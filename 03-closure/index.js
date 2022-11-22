//* Closure (fermeture)
//* donne accès au scope d'une fonction extérieure depuis l'intérieur d'une fonction
//* permet de faire des variables privées
function outer() {
  const privateVar = "secret";
  function inner() {
    console.log(`salut! le secret est : ${privateVar}`);
  }

  return inner;
}

outer();

const value = outer();
console.log(value);
value();
outer()();
