import { soma } from './funcoes'

console.log(soma(1, 2));
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
const arr2 = [5, 6, 7, 8];

const newArr = arr.map((item) => {
    return item * 2;
});

console.log(newArr);

const usuario = {
    nome: "Felipe",
    idade: 28,
    endereco: {
        cidade: "bh",
        estado: "mg"
    }
}

const { nome, endereco: { cidade } } = usuario;

console.log(nome + " " + cidade);

console.log(...arr);

const arr3 = [...arr, ...arr2];
console.log(arr3);