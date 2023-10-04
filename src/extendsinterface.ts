export {}

interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Gato {
    nome: string
}

interface Cachorro extends Animal, Gato {
    raca: string;
}

const cachorro: Cachorro ={ 
    nome: 'Amarula',
    idade: 5,
    porte: 'medio',
    raca: 'Poodle,'
}

interface Funcionario {
    id: number;
    nome: string;
    salario: number
}

interface Desenvolvedor extends Omit<Funcionario, 'id'>{
    id: string;
    linguaguemProcamacao: string;
}

const desenvolvedor: Desenvolvedor = {
    id: 'TS-321',
    nome: 'Silas Augusto',
    salario: 3000,
    linguaguemProcamacao: 'Typescript',
}

console.log(desenvolvedor)