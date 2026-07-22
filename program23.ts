class BankAccount {
    balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    displayBalance(): void {
        console.log("Balance =", this.balance);
    }
}

let acc = new BankAccount();

acc.deposit(1000);
acc.withdraw(200);
acc.displayBalance();