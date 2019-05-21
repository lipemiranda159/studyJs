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