export {}

/*interface Pessoa {
    nome: string;
    idade: number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(pessoas: T[], idade: number):T[]{
    return pessoas.filter(pessoa => pessoa.idade >= idade);
};

const pessoas: Pessoa[] = [
    {nome: 'Silas', idade: 26 },
    {nome: 'Victor', idade: 22 },
    {nome: 'Lara', idade: 19 },
    {nome: 'Carol', idade: 23 },
];

const pessoaComidadeMaiorQue25 = obterPessoaIdadeMaiorQue(pessoas, 25)
console.log(pessoaComidadeMaiorQue25) */

function juntarObjetos<U, V>(objeto1: U, objeto2: V){
    return{
        ...objeto1,
        ...objeto2, 
    }
}

const pessoa = juntarObjetos(
    { nome: 'Silas'},
    { idade: 26, }
)

console.log(pessoa)

function juntarObjetos02<U extends object, V extends object>(objeto1: U, objeto2: V){
    return{
        ...objeto1,
        ...objeto2, 
    }
}

const pessoa03 = juntarObjetos(
    { nome: 'Silas'},
    { idade: 26, }
)

/*function prop<T, K>(objeto: T, chave: K){
    return objeto[chave]
}*/

function prop2<T, K extends keyof T>(objeto: T, chave:K){
    return objeto[chave]
}

const pessoa4 = prop2(
    { nome: 'Silas'}, 'nome'
)