// class User implements UserInterface {
//     public name: string;
//     protected email: string;
//     age: number;
//     private password: string;
// }
class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        console.log("User Created:", this.name);
    }
    register() {
        console.log(this.name, "is now registered");
    }
    payInvoice() {
        console.log(this.name, "has paid their invoice");
    }
}
let harry = new User("Harry Potter", "hp@gmail.com", 18, "Weasley1");
harry.register();
// console.log("Harry's email", harry.email); <= won't work, set to protected
console.log("Harry's email", harry.email);
// console.log("Harry's password", harry.password); <= won't work, set to private
console.log("Harry's password", harry.password);
console.log("Harry's age =>", harry.age);
class Member extends User {
    constructor(id, name, email, age, password) {
        super(name, email, age, password);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
let kipo = new Member(1, "Kipo", "mandu@gmail.com", 13, "wolf1234");
kipo.payInvoice();
