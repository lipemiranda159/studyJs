class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin());

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

console.log(usuarios.map(item => item.idade));

console.log(usuarios.filter(item => item.empresa == "Rocketseat" && item.idade > 18));

console.log(usuarios.find(item => item.empresa == "Google"));

usuarios.map((item) => item.idade = item.idade * 2);

console.log(usuarios.filter(item => item.idade <= 50));

// 3.1
const arr2 = [1, 2, 3, 4, 5];
arr2.map(item => item + 10);
const usuario = { nome: "Diego", idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

// 3.3

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => ({
    nome,
    idade
});

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4

const promise = () => new Promise((resolve, reject) => resolve());

const empresa = {
    nome1: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome1, endereco: { cidade, estado } } = empresa;


function mostraInfo({ nome, idade } = usuario) {
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 });

const arr1 = [1, 2, 3, 4, 5, 6];

const { x, ...y } = arr1;

console.log(x);
console.log(y);

function soma(...soma) {
    soma.reduce((total, item) => total + item);
}

console.log(soma(arr1));

const usuario1 = {
    nome: "Diego",
    idade: 23,
    endereco: {
        cidade: "Rio do Sul",
        uf: "SC",
        pais: "Brasil"
    }
};

const usuario2 = {...usuario1, nome: "Gabriel" };
const usuario3 = {
    ...usuario,
    endereco: {...usuario1.endereco, cidade: "Lontras" }
};