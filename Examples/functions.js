function getSum(num1, num2) {
    return num1 + num2;
}
console.log("getSum =>", getSum(2, 4));
let mySum = function (num1, num2) {
    return parseInt(num1) + num2;
};
console.log("mySum =>", mySum("5", 10));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
console.log("getNum =>", getName("Harry", "Potter"));
console.log("getName =>", getName("Harry"));
function nullFunction() {
    return null;
}
