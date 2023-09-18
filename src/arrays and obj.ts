"Use Strict"
let animais: any[] = ["🦊","🐺","🐱","🐩","🐕"]
console.log(animais)

let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = {nome: 'Toyota Yarisc Sedan XS', ano: 2019, preco: 80.000}
console.log(carro)

let multiplicarNum = (x:number, y:number): number =>{
    return x*y
}