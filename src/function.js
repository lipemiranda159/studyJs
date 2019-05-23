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