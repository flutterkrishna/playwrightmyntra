class User {
    constructor(name) {
        this.name = name;
    }
}

class Order {
    constructor(user, amount) {
        this.user = user;   
        this.amount = amount;
    }

    showOrder() {
        console.log(this.amount + " ordered ₹" + this.user.name);
    }
}

const user1 = new User("Krish");
const order1 = new Order(user1, 500);

order1.showOrder(); // Krish ordered ₹500