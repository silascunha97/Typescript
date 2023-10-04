export {}

type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade = "Rio de Janeiro" | "São Paulo" | "Salvador" | "Belo Horizonte";

type CidadeCoordenadas = {
    x: number;
    y: number;
}

type Pessoa = { 
    localNascimento: Cidade;
    residenciaAtual: Cidade;
};

const pessoa = {
    localNascimento: "São Paulo",
    residenciaAtual: { x: 9, y: 10},
} satisfies Pessoa;

console.log(pessoa.localNascimento.toUpperCase())

type Connection = {}

declare function createConnection(
    host: string,
    port: string,
    reconnect: boolean,
    poolsize: number
):Connection;

type Configuration = {
    host: string;
    port: string | number;
    tryReconnect: boolean | (() => boolean);
    poolSize?: number
};
const config = {
    host: 'localhost',
    port: 3306,
    tryReconnect: () => true,
} satisfies Configuration

const Connect = () =>{
    let { host, port, tryReconnect} = config;

    createConnection(host, `${port}`, tryReconnect(), 10)
}