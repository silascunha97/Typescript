let listaFrutas1:[string, ...string[]] = ["🥭", "🍍", "🍌", "🍋"]
let listaFrutas2: [string, boolean, ...string[]] = ["5", true, ...listaFrutas1, "🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭"];
console.log(listaFrutas2)

function listarPessoas(nome: string[], idade:number[]){
    return [...nome, ...idade]
}

let resultado = listarPessoas(['Silas', 'Augusto'], [26, 22]);
console.log(resultado)

type Nome =
        [primeiroNome:string, sobrenome: string] |
        [primeiroNome:string, nomedoMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome){
    return[...nome];
}

console.log(criarPessoa("Silas", "Cunha"))
console.log(criarPessoa("Silas", "Augusto", "Cunha"))

