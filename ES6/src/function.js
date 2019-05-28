import { __await } from "tslib";

export const idade = 23;
export default class Usuario {
    static info() {
        console.log('Apenas teste');
    }
}

const minhaPromisses = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')

    }, 2000);
});

export async function minhaPromisse() {
    console.log(await minhaPromisses());
}

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log("1s");

    await delay();
    console.log("2s");

    await delay();
    console.log("3s");
}

umPorSegundo();

import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('erro na api');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);

        } catch (err) {
            console.warn('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');


const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');