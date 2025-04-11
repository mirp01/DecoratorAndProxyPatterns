// Component Interface
interface Coffee {
    getCost(): number;
    getProduct(): string;
}
  
// Concrete Component
class Expresso implements Coffee {
    getCost(): number {
        return 2.50;
    }
    
    getProduct(): string {
        return "Expresso";
    }
}
  
// Abstract Decorator
abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;
    
    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }
    
    getCost(): number {
        return this.decoratedCoffee.getCost();
    }
    
    getProduct(): string {
        return this.decoratedCoffee.getProduct();
    }
}
  
// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.decoratedCoffee.getCost() + 0.5;
    }
    
    getProduct(): string {
        return `${this.decoratedCoffee.getProduct()}, milk`;
    }
}
  
class ChocolateDecorator extends CoffeeDecorator {
    getCost(): number {
      return this.decoratedCoffee.getCost() + 0.5;
    }
    
    getProduct(): string {
      return `${this.decoratedCoffee.getProduct()}, chocolate`;
    }
}
  
class CinammonDecorator extends CoffeeDecorator {
    getCost(): number {
      return this.decoratedCoffee.getCost() + 0.5;
    }
    
    getProduct(): string {
      return `${this.decoratedCoffee.getProduct()}, cinammon`;
    }
}
  
// Usage example
function orderCoffee(): void {
    // Expresso
    let coffee: Coffee = new Expresso();
    console.log(`Order: ${coffee.getProduct()} - $${coffee.getCost()}`);
    
    // Milk
    let milkCoffee: Coffee = new MilkDecorator(new Expresso());
    console.log(`Order: ${milkCoffee.getProduct()} - $${milkCoffee.getCost()}`);
    
    // Multiple toppings
    let expensiveCoffee: Coffee = new ChocolateDecorator(new CinammonDecorator(new MilkDecorator(new Expresso())));
    console.log(`Order: ${expensiveCoffee.getProduct()} - $${expensiveCoffee.getCost()}`);
}

orderCoffee();