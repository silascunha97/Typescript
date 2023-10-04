export {}

interface Pessoa {
    nome: string;
    idade: number;
    email: string;
}

type PessoaOpicional = {
    [P in keyof Pessoa]?: Pessoa[P];
}

const pessoa: Pessoa = {
    nome: 'Silas Augusto',
    idade: 26,
    email: 'test_email@mail.br',
}

const pessoaOpicional: PessoaOpicional = {
    nome: 'Fulano sla'
};

console.log(pessoaOpicional)

type Usuario = {
    nome: string;
    endereco: string;
    telefone: number;
    idade: number
}

type FuncionarioMapped = {
    [F in keyof Usuario]?: Usuario[F];
}

type SomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: number;
    readonly idade: number
}

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]
}

const usuarioMapped: UsuarioMappedType= {
    nome: 'Silas Augusto'
}

interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numerosPaginas: number;
}

type Artigo = Omit<Livro, 'NumeroPaginas'>;

type LivroModelo = Readonly<Livro>

const livro: LivroModelo = {
    autor: 'Mario Quintana',
    preco: 45,
    numerosPaginas: 200,
    titulo: 'Eu passarinho'
}

