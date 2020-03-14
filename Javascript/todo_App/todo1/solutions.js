// function isEven(number){
//     return number % 2 === 0;
// }
//
// function factorial(number) {
//     let result = 1;
//     for(i = 1; i <= number; i++){
//         result *= i;
//     }
//     return result;
// }
//
// function kebabToSnake(str) {
//     let newSring = str.replace(/-/g, '_');
// return newSring;
// }

var todos = ["1 item"];
var input = prompt('What would you like to do?');
while (input !== "quit") {
if (input === "list") {
    listToDos();
} else if (input === "new") {
    newToDo();
} else if (input === "delete"){
    deleteToDo();
}
    input = prompt('What would you like to do?');
}

console.log("ok, you QUIT the APP");

function listToDos(){
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function newToDo() {
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log(newTodo + ' added');
}

function deleteToDo(){
    var index = prompt("Enter index todo to delete");
    todos.splice(index, 1);
    console.log("Deleted todos!");
}