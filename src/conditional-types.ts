export {}

type Pessoa = {
    nome: string;
    idade:number;
    endereco: string;
};

type Empresa = {
    nome: string;
    cnpj: number;
};

type EnderecoPessoa = {
    EnderecoSegundario: string;
    cidade: string;
    pais: string;
};

type EnderecoEmpresa = {
    localizacao: 'Rua' | 'Avenida' | 'Praca';
};

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    EnderecoSegundario: 'Rua 2',
    cidade: 'São Paulo',
    pais: 'Brasil'
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: "Rua",
};

console.log(enderecoPessoa, enderecoEmpresa);

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';

type FiltrarArquivoMedia<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoMedia<FormatoArquivos>;

const arquivoAudio: ArquivoAudio = 'mp4';

console.log(arquivoAudio)
