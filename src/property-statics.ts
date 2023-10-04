'Use Strict';

export {}

class Funcionario {

    static contracoes = 0;

    constructor( 
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        Funcionario.contracoes++;
    }
}

const funcionario_01 = new Funcionario(
    'Silas',
    'Cunha',
    'Developer'
);

const funcionario_02 = new Funcionario('Victor', 'Cunha', 'Operacional');
console.log(Funcionario.contracoes);
const funcionario_03 = new Funcionario('Lara', 'Cunha', 'Auxiliar administrativo');
console.log(Funcionario.contracoes); 

class Funcionario_01 {
    private static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ){
        Funcionario_01.contratacoes++
    }

    public static retornarContratacoes(){
        return Funcionario_01.contratacoes;
    }
}
const funcionario_04 = new Funcionario_01('Silas Augusto', 'Cunha', 'Desenvolvedor de Sistema JR');

console.log(Funcionario_01.retornarContratacoes())

type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro{
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;
    
    constructor(nome: string, idade: number, racas: Raca[]){
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO)
    }

    public exibirInformacao(): void {
        console.log(`O cachoro ${this.nome} tem ${this.idade} idade.`)
    }
}

const cachoro_1 = new Cachorro('Ted', 8, ['Yorkshire'])
const cachoro_2 = new Cachorro('Amarula', 8, ['Poodle'])