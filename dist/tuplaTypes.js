"use strict";
let listaFrutas1 = ["🥭", "🍍", "🍌", "🍋"];
let listaFrutas2 = ["5", true, ...listaFrutas1, "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭"];
console.log(listaFrutas2);
function listarPessoas(nome, idade) {
    return [...nome, ...idade];
}
let resultado = listarPessoas(['Silas', 'Augusto'], [26, 22]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Silas", "Cunha"));
console.log(criarPessoa("Silas", "Augusto", "Cunha"));
