export {}
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome:string) {
        this.nome = nome;
        this.sobrenome= sobrenome;
    }
    nomeCompleto():string{
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Silas Augusto', 'da Cunha')
console.log(pessoa.nomeCompleto())

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante()
estudante.codigoEstudante = 987514
estudante.nomeEstudante = 'Silas Augusto da Cunha'

console.log(`Codigo do estudante ..: ${estudante.codigoEstudante}`);
console.log(`Nome do estudante ..: ${estudante.nomeEstudante}`);

class Estudante_01 {
    codigoEstudante: number;
    nomeEstudante: string;


    constructor(codigoEstudante:number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

listarEstudante():void {
    console.log('Codigo do estudante ... : ' + this.nomeEstudante)
    console.log('Nome do estudante ... : ' + this.codigoEstudante)
    }
}

const estudante_0001 = new Estudante_01(9845, 'Amarula Mosby');
console.log('Lendo o atributo do Estudante ...: ' + estudante_0001.codigoEstudante);
console.log('Lendo o nome do Estudante ...: ' + estudante_0001.nomeEstudante);