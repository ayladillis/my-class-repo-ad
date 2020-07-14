function createMiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.statement = [0]
}

var setBalance = function (entry) {
  this.statement.push[entry]
}

var updateStatement = function (value) {
  this.statement.push(value);
}

var getStatement = function (){
  return(this.statement);
}

var printStatement = function (){
  console.log(this.statement);
}

var deposit = function (value){
  setBalance(this.balance);
}

var withdraw = function (){
  setBalance(this.balance);
}


return this.printBalance;
return printStatement;

