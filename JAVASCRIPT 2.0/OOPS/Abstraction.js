class BankAccount {
    #balance; // private property

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
        this.#balance = 0;
    }

// public method -- visible to users.

  deposit (amount) {
    if(amount > 0) {
        this.#balance += amount;
        console.log(`Deposited ₹${amount}`);

    } else {
        console.log(`Invalid deposit amount`);
    }
  }


//   public method -- visible to user

   withdraw (amount) {
    if (amount <= this.#balance) {
        this.#balance -= amount;

        console.log(`withdrawn ₹${amount}`);

    } else {
        console.log("Insufficient balance")
    }
   }



//    public method to show limited detail..

checkBalance() {
    console.log(`current balance: ₹${this.#balance}`);
}
}
// create an account 

  const account = new BankAccount("Nishad")

account.deposit(1000);
account.withdraw(400);
account.checkBalance();
   
