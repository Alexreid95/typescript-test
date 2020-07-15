function getSum(num1: number, num2: number): number {
	return num1 + num2;
}

console.log("getSum =>", getSum(2, 4));

let mySum = function (num1: any, num2: number): number {
	return parseInt(num1) + num2;
};

console.log("mySum =>", mySum("5", 10));

function getName(firstName: string, lastName?: string): string {
	if (lastName == undefined) {
		return firstName;
	}
	return firstName + " " + lastName;
}

console.log("getNum =>", getName("Harry", "Potter"));
console.log("getName =>", getName("Harry"));

function nullFunction(): void {
	return null;
}
