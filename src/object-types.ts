"Use Strict";
const pessoa = {
    name:  'Silas',
    middleName: 'Augusto',
    idade: 26,
    cargo: 'Desenvolvedor',
}

console.log(pessoa);

function onboarding01(funcionario: {nome: string}){
    return "Seja Bem-vindo " + funcionario.nome
}

console.log(onboarding01({nome: "Silas Augusto"}));

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa){
    return(
        'Seja Bem-Vindo ' +
        pessoa.nome +
        "!" +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.'
    )
}

//console.log(onboarding02({nome: 'Silas Augusto', funcao: "Desenvolvedor"}))

type Pessoa04 = {
    nome: string;
    funcao: string;
    idade: number
}

function onboarding03(pessoa: Pessoa04){
    return(
        'Seja Bem-Vindo ' +
        pessoa.nome +
        "!" +
        " Sua idade é " +
        pessoa.idade + " " +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.'
    )
}

console.log(onboarding03({nome: 'Silas Augusto', funcao: "Desenvolvedor", idade:26}))

interface Pessoa05{
    nome:string;
    funcao:string;
    linguagem:string;
    email?:string
}

function onboarding04(pessoa: Pessoa05){
    return(
        'Seja Bem-Vindo ' +
        pessoa.nome +
        "!" +
        " Sua idade é " +
        pessoa.linguagem + " " +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        'Seu E-Mail é ' +
        pessoa.email
    )
}

console.log(onboarding04(
    {
        nome: 'Silas Augusto', 
        funcao: "Desenvolvedor", 
        linguagem: "Typescript/Javascript", 
        email:'test_Mail@mail.br' 
    })
)
interface Pessoa06{
    nome:string;
    funcao:string;
    linguagem:string;
    readonly email:string
}

function onboarding05(pessoa: Pessoa06){
    return(
        'Seja Bem-Vindo ' +
        pessoa.nome +
        "!" +
        " Sua idade é " +
        pessoa.linguagem + " " +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        'Seu E-Mail é ' +
        pessoa.email
    )
}

console.log(onboarding05(
    {
        nome: 'Silas Augusto', 
        funcao: "Desenvolvedor", 
        linguagem: "Typescript/Javascript", 
        email:'test_Mail@mail.br' 
    })
)

interface Mae {
    Sobrenome: string
}
interface Pai {
    nome: string,
}
interface Filha extends Mae, Pai {
    idade: number;
}

const filha:Filha = {
    nome: "Lara",
    Sobrenome: "Cunha",
    idade: 19
}
console.log(filha)

interface Cachorro {
    tipo: string
}

interface Gato {
    tipo: string
}

type Animal = Cachorro & Gato

type Usuario = {
    nome: string,
    email: string,
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: "Silas Augusto",
    email: "algumacoisa@mail.com"
}
const admin: Admin = {
    nome: "Silas Augusto",
    email: "algumacoisa@mail.com",
    admin: true
}

function acessarSistema<T>(usuario: T){
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario))
console.log(acessarSistema<Admin>(admin))

/*function acessarSistema(usuario: Usuario): Usuario{
    return usuario;
}

console.log(acessarSistema(usuario));
*/

