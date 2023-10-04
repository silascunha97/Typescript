export {}

class Animal {
    mover(distancia = 0){
        console.log(`Animal se moveu ...: ${distancia} metros. `);
    }
}

class Cachorro extends Animal {
    latir(){
        console.log('Au! Au!');
    }
}

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover();
cachorro.latir();

class Pessoa {

    constructor(private nome: string, private sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    retornarNomeCompleto():string {
        return `${this.nome} ${this.sobrenome}`
    }

    apresentarPessoa():string {
        return `Meu nome é ${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Silas Augusto', 'da Cunha');
console.log(pessoa);

class Funcionario extends Pessoa{
    /**
     *
     */
    constructor(nome: string, sobrenome:string, private funcao: string) {
        super(nome, sobrenome);
    }
    retornarNome_02(): string {
        return super.apresentarPessoa() + `Sou ${this.funcao}`
    }
}

const funcionario = new Funcionario('Silas Augusto', 'da Cunha ', 'Desenvolvedor')
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNome_02());

