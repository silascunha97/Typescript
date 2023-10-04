class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(){
        return this.item;
    }

    setItem(item: T){
        this.item = item
    }
}

const boxString = new Box<string>('Silas')
const boxNumber = new Box<number>(26)

console.log(boxString, boxNumber)

class Estudante<T, U> {
    private id: T;
    private nome: U;

    setValor(id: T, nome: U): void{
        this.id = id;
        this.nome = nome;
    }

    retornarValor():void{
        console.log(`Identifacaão do estudante ...: ${this.id}, Nome do Estudante ...: ${this.nome}`);
    }

}

const estudante = new Estudante<number, string>();
const estudanteSegundario = new Estudante<string, string>();

estudante.setValor( 101, 'Silas')
estudante.retornarValor()

estudanteSegundario.setValor('205', 'Silas Augusto');
estudanteSegundario.retornarValor()