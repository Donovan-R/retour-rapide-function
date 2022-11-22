//* Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name}, solde de ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log("pas assez de fonds");
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance, deposit, withdraw };
}

const susan = newAccount("susan", 500);
const bob = newAccount("bob", 100);

susan.showBalance();
susan.deposit(400);
susan.deposit(1000);
susan.withdraw(500);
susan.showBalance();
