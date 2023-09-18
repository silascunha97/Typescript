"use strict";
const matrizA = [1, "A"];
const frutasA = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭"];
console.log(frutasA[3]);
const frutasb = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭"];
let idiomas = ['Inglês', 'Português', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
let idiomas1 = ['Inglês', 'Português', 'Espanhol', 'Francês', 'Mandarim', 'Italiano'];
console.log(idiomas1.length);
let listaNumero = [0, 1, 2, 3, 4, 5];
listaNumero = [...listaNumero, 6, 7, 8, 9, 10];
console.log(listaNumero);
let linguagemArray = ["Python", "Typescript", "Javascript", "Java", "C#", "C++", "C", "R", "Go"];
function funcaoLinguagem(linguagem) {
    for (let i = 0; i < linguagemArray.length; i++) {
        console.log(linguagemArray[i]);
    }
}
funcaoLinguagem(linguagemArray);
let pessoa1;
pessoa1 = ['Silas Augusto da Cunha', 'Santa Catarina', 26];
console.log(pessoa1);
let pessoa2;
pessoa2 = ["Silas Cunha", "Desevolvedor", 26];
console.log(pessoa2[1]);
let listaFrutas = ["🥭", "🍍", "🍌", "🍋"];
console.log(...listaFrutas);
