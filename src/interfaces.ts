export {}

type Animal = {
    nome: string;
    raca: string;
    cor: string;
}

interface Animal01 {
    nome: string;
    raca: string;
    cor: string;
}

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number
}

let exibirPessoa = (pessoa: Pessoa) =>{
    return `
    Nome ...: ${pessoa.nome}
    Sobrenome ...: ${pessoa.sobrenome}
    Idade ...:${pessoa.idade}`
}

const silas: Pessoa = {
    nome: 'Silas',
    sobrenome: 'Cunha',
    idade: 26
}

console.log(exibirPessoa(silas))

interface Livro {
    titulo: string;
    autor: string,
    paginas?: number
}

const livro: Livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    paginas: 150
}

console.log(livro)

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}
const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969
}

//carro.modelo = 'Fusca 2.0'

console.log(carro)

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    comer(tipoComida: string):void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean){
        this.nome = nome
        this.idade = idade
        this.estaVivo = estaVivo
    }
    comer(tipoComida: string): void {
        console.log(`O gato${this.nome} está comendo ${tipoComida}`)
    }
}

const gato = new Gato(' Sartre', 4, true)
console.log(gato);
gato.comer('Wiska')
console.log(gato)

interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string
    sobrenome: string
    idade?:number
}

interface Animal02 {
    nome: string;
    idade: number;
    tamanho: string
}

interface Cachorro02 extends Animal02 {
    raça: string
}

const cachorro: Cachorro02 = {
    nome: 'Amarula',
    idade: 5,
    tamanho: 'medio',
    raça: 'Poodle'
};

console.log(cachorro)

interface Cachorro03 {
    nome: string;
}
interface Gato02 {
    nome: string
}
interface Animal03 extends Cachorro03, Gato02{
    idade: number
}

const amarula: Animal03 = {
    nome: 'Amarula',
    idade: 5,

}
console.log(amarula)