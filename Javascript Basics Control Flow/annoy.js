// var x = prompt("Are we there Yet?");

// while(x != "yes" && x != "yeah"){
// 	var x = prompt("Are we there Yet?");
// }

// alert("we finally made it");

// version 2:

var x = prompt("Are we there Yet?");

while(x.indexOf("yes") === -1){
	var x = prompt("Are we there Yet?");
}

alert("we finally made it");

