export {}

abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string){}

    abstract retornarSalario(): number;
    get retornarNomeCompleto():string {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque():string{
        return `${this.retornarNomeCompleto} - Salário: 
    ${this.retornarSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario{
    constructor(nome: string, sobrenome: string, private salario: number){
        super(nome, sobrenome)
    }

    retornarSalario(): number {
        return this.salario;
    }
} 

class FuncionarioPJ extends Funcionario{
    constructor(nome: string , sobrenome: string, private valorHora: number, private horasTrabalhadas: number){
        super(nome, sobrenome)
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

let silas = new FuncionarioCLT('Silas Augusto', 'da Cunha', 12000);
let Victor = new FuncionarioPJ('Victor Hugo', 'Lisboa da Cunha', 150, 160);

console.log(Victor.emitirContraCheque())
console.log(silas.emitirContraCheque())
