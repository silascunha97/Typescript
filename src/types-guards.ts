export {}
function detalhesFuncionario(funcionario: string | number){
    if (typeof funcionario == 'string') {
        return `O nome do funcionario é: ${funcionario}`;
    }else if (typeof funcionario == 'number') {
        return `O ID do funcionario é: ${funcionario}`
    }
}

const func01 = detalhesFuncionario('Silas Augusto');
console.log(func01);

const func02 = detalhesFuncionario(1);
console.log(func02)

const formataData = (valor: Date | string ) => {
    if (valor instanceof Date) {
        return valor.toISOString()
    }

    return new Date(valor).toISOString()
    
}
console.log(formataData(new Date("2023-09-24")))
console.log(formataData("2023-09-24"))

interface Humano {
    falar: () => void;
}

interface Animal {
    voz: () => void;
}

const dizerAlgo = (som: Humano | Animal ) =>{
    if ('falar' in som) {
        return som.falar();
    }

    return som.voz();
}

type alfanumerico = string | number

function exibirTipo(a: alfanumerico, b: alfanumerico){
    if (typeof a === 'number' && typeof b === 'number') {
        return a+b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    }

    throw new Error('Argumentos invalidos ambos os argumetos devem ser numero ou string.');

}

console.log(exibirTipo('Silas', 15))
console.log(exibirTipo(15, 15))

class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string){
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto {
    nome: string;
    ano: number;

    constructor(nome: string, ano: number){
        this.nome = nome;
        this.ano = ano;
    }
}

let detalhesVeiculo = (veiculo: Carro | Moto) =>{
    if (veiculo instanceof Carro) {
        return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`
    } else if (veiculo instanceof Moto) {
        return`O nome da moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`
    }
}

const c1 = new Carro('Gol', 'Volkswagen')
console.log(detalhesVeiculo(c1))

const moto = new Moto('CBR', 2020)
console.log(detalhesVeiculo(moto))

interface Animal_01 {
    grupo: string;
}

class Peixe implements Animal_01{
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro implements Animal_01{
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

function nadar(grupo: string){
    console.log(`O ${grupo} está nadando`)
}
function voar(grupo: string){
    console.log(`O ${grupo} está voando`)
}

function mover(animal: Peixe | Passaro){
    if('corPeixe' in animal){
        nadar((animal as Peixe).grupo);
    } else if ('corPena' in animal){
        voar((animal as Passaro).grupo)
    }
}

mover(new Passaro('Passaro', 'branco'))
mover(new Peixe('Peixe', 'Azul'))