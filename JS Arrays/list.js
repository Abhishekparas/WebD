var todos = [];

var input = prompt("What would you like to do?");


while(input !== "quit"){
	if(input === "list"){
		console.log("**************");

		for (var i = 0; i < todos.length; i++) {
			console.log(i + " : " + todos[i]);
		}
		console.log("**************");
	}

	else if(input === "new"){
		var newtodo = prompt("Add new todo");
		todos.push(newtodo);
		console.log("Added todo");
	}
	else if (input === "delete") {
		var index = prompt("enter the index to be deleted");
		todos.splice(index,1);  //if the user inputs index as 3 it will simply delete the single element at that index
		console.log("Deleted todo");
	}

	input = prompt("What would yu like to do?");

}
console.log("OK! You quit the app");
