export {}

class Estudante {
    public codigoEstudante: number;
    public nomeEstudante: string;
    private idade: number;

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    retornarDadosAlunos(){
        return `Codigo do aluno: ${this.codigoEstudante} ` +
                `Nome do Estudante: ${this.nomeEstudante} ` +
                `Idade do Aluno: ${this.idade} `;
    }
}

const estudante = new Estudante(995533, 'Silas Augusto', 26);
console.log(estudante.retornarDadosAlunos());


class Estudante_02 {
    public codigoEstudante: number;
    protected nomeEstudante: string;
    
    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante_02 {
    private curso: string

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }

    retornarDadosAlunos(){
        return `Codigo do aluno: ${this.codigoEstudante} ` +
                `Nome do Estudante: ${this.nomeEstudante} ` +
                `Materia do aluno: ${this.curso}`
    }
}

const Estudante_03 = new Pessoa(112233, 'Silas Augusto da Cunha', 'Introdução ao banco de dados')
console.log(Estudante_03.retornarDadosAlunos())