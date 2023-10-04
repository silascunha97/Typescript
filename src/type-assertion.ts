export {}

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean) {
    const precoComDesconto = preco*(1 - desconto)
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto
}

const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false)
console.log(descontoFinal)

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}



const humano:unknown = {
    idade: 26,
    idiomas: 'Português',
}

const humano_02 = humano as Humano
console.log(humano_02.nome.toUpperCase())

type dataNascimento = string;
type Idade = number

type InformacaoPessoa<T> = T extends number ? number: string;

const dataNascimento: InformacaoPessoa<dataNascimento> ='16/09/1997';
console.log(dataNascimento)

const idade: InformacaoPessoa<Idade> = 26;
console.log(idade) 