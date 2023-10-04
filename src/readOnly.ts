"Use Strict";
export {}

class Funcionario01{
    /*readonly*/ dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;        
    }
}

const funcionario = new Funcionario01(new Date(1997, 9 ,16));

funcionario.dataNascimento = new Date(1997, 9 ,16)

console.log(funcionario)

class Funcionario02{
    
    /**
     *
     */
    constructor(readonly dataNascimento: Date) {
      this.dataNascimento = dataNascimento;
    }
}

class Funcionario03{
    readonly codigoFuncionario: number;
    nome: string;


    constructor(nome: string, codigo: number) {
        this.codigoFuncionario = codigo;
        this.nome = nome;
    }
}

const func = new Funcionario03('Silas', 112233);
func.nome = 'Augusto Cunha'
console.log(func)
//func.codigoFuncionario = 332211

interface IFuncionario {
    codigoFuncionario: number;
    nomeEmpregado: string;
}

const funcionario_01: Readonly<IFuncionario> = {
    codigoFuncionario: 506699,
    nomeEmpregado: 'Robson'
};

const funcionario_02: IFuncionario = {
    codigoFuncionario: 506699,
    nomeEmpregado: 'Robson'
}

funcionario_02.codigoFuncionario = 878796
funcionario_02.nomeEmpregado= 'Augusto'