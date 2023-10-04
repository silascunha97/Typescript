export {}

class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() : number {
        return this._altura*this._largura
    }   
}

console.log(new Quadrado().calcularQuadrado)

class Pessoa {
    nome: string;

    retornarNome(setNome: string){
        this.nome = setNome;
    }
}

//const pessoa = new Pessoa();
//pessoa.retornarNome('Augusto Cunha');
console.log(`Meu nome é ...:`, pessoa.name);

class Estudante {
    private _nome = 'Augusto';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante(){
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante
console.log(resultado)

class Estudante_01 {
    public nome: string;
    public semestre: number;
    public curso: string;

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }
 
    public get Cursos() {
        return this.curso;
    }

    public set Cursos(setCurso: string){
        this.curso;
    }
 
    public get Semestre() {
        return this.semestre;
    }

    public set Semestre(setSemestre: number){
        this.semestre;
    }
    
}
const estudante_01 = new Estudante_01('Silas Augusto', 2, 'BSI - Bacharelado em Sistemas da Informação')
console.log(estudante_01);

estudante_01.curso = 'Tecnologia da infomação'
console.log('Curso atualizado', estudante_01)
