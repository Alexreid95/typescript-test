/*

function showToDo(todo: { title: string; text: string }) {
	console.log("showToDo =>", todo.title + ": " + todo.text);
}

let myToDo = { title: "dinner", text: "Make dinner tomorrow" };

showToDo(myToDo);

*/

interface ToDo {
	title: string;
	text: string;
}

function showToDo(todo: ToDo) {
	console.log("showToDo =>", todo.title + ": " + todo.text);
}

let myToDo = { title: "dinner", text: "Make dinner tomorrow" };

showToDo(myToDo);
