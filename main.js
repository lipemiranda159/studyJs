alert('test');

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push("Nova marcação");
        console.log("add lista");
    }
}

const minhaClasse = new TodoList();

document.getElementById("btn").onclick = function() {
    minhaClasse.addTodo();
}

const arr = [1, 2, 3, 4];

const newArr = arr.map(function(item) {
    return item * 2;
});

console.log(newArr);