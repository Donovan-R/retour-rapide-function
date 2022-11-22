//* Closure

function newAccount(name, initialBalance) {
  function showBalance() {
    console.log(`hey ${name}, solde de ${initialBalance}`);
  }
  return showBalance;
}

newAccount("john", 300)();

const susan = newAccount("susan", 500);
const bob = newAccount("bob", 100);

susan();
bob();
