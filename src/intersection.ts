export {}

interface IEndereco {
    rua: string;
    bairro: string;
    cidade: string;
}

interface IPessoa{
    nome: string;
    idade: number;
    profissao: string;
}

type IEnderecoPessoa = IEndereco & IPessoa;
const IEnderecoPessoa: IEnderecoPessoa = {
    nome: 'Silas Augusto',
    idade: 26,
    profissao: 'Desenvolvedor',
    rua: 'Arlindo Werner',
    bairro: 'Cidade Nova',
    cidade: 'Itajaí'
}

console.log(IEnderecoPessoa)

interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string
}

interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica
const dadosCliente: DadosCliente = {
    conta: 123456,
    agencia: 1234,
    banco: 'Banco do Brasil',
    nome: 'Silas Augusto',
    cpf: 11111111111,
    email: 'test_email@test.com.br',
};
console.log(dadosCliente)