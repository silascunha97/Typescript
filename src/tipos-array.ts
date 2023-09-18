const matrizA:Array<number|string>= [ 1, "A"]

const frutasA:string[] = ["🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭"];

console.log(frutasA[3])

const frutasb:Array<string> = ["🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭"];

let idiomas: Array<string> = ['Inglês', 'Português', 'Espanhol', 'Francês']
console.log(idiomas)
idiomas.push('Mandarim')
console.log(idiomas)

let idiomas1: Array<string> = ['Inglês', 'Português', 'Espanhol', 'Francês', 'Mandarim', 'Italiano']
console.log(idiomas1.length)

let listaNumero:number[] = [0, 1, 2, 3, 4, 5]
listaNumero = [...listaNumero, 6, 7, 8, 9, 10]
console.log(listaNumero);

let linguagemArray:Array<string> = ["Python", "Typescript", "Javascript", "Java", "C#", "C++", "C", "R", "Go"]

function funcaoLinguagem(linguagem:string[]){
    for( let i = 0; i < linguagemArray.length; i++){
        console.log(linguagemArray[i])
    }
}

funcaoLinguagem(linguagemArray)

let pessoa1: [string, string, number]
pessoa1 = ['Silas Augusto da Cunha', 'Santa Catarina', 26]
console.log(pessoa1)

let pessoa2:[string, string, number]
pessoa2 = ["Silas Cunha", "Desevolvedor", 26]
console.log(pessoa2[1])

let listaFrutas:[string, ...string[]] = ["🥭", "🍍", "🍌", "🍋"]
console.log(...listaFrutas)