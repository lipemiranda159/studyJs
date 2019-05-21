"use strict";

var _console;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

alert('test');

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push("Nova marcação");
      console.log("add lista");
    }
  }]);

  return TodoList;
}();

var minhaClasse = new TodoList();

document.getElementById("btn").onclick = function () {
  minhaClasse.addTodo();
};

var arr = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var usuario = {
  nome: "Felipe",
  idade: 28,
  endereco: {
    cidade: "bh",
    estado: "mg"
  }
};
var nome = usuario.nome,
    cidade = usuario.endereco.cidade;
console.log(nome + " " + cidade);

(_console = console).log.apply(_console, arr);

var arr3 = [].concat(arr, arr2);
console.log(arr3);
