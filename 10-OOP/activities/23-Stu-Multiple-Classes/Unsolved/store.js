const toy = require("./toy");

class Store {
  constructor(name, stock, revenue) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  processProductSale(name) {
    this.stock.forEach(item => {
      if (item.name === name) {
        if(item.count > 0) {

        }
      }
    });

  }

replenishStock(name, count) {
  this.stock.forEach(item => {
    if (item.name === name) {
      item.count += count;
      console.log(`Replenished `)
    }
  })
}

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

}

module.exports = Store;
