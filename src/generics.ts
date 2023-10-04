function retornarNumeroRandomico(items: number[]):number {
    let numeroRandomico = Math.floor(Math.random()*items.length);
    return items[numeroRandomico];
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(retornarNumeroRandomico(numeros))

function retornarElementosRandomico(items: string[]):string {
    let itemRandomico = Math.floor(Math.random()*items.length);
    return items[itemRandomico];
};

let paises = ["Brasil", "EUA", "Japão", "China", "Canadá"]
console.log(retornarElementosRandomico(paises))

//Exemplo 2

function retornarElementosRandomico02<T>(items: T[]):T {
    let itemRandomico = Math.floor(Math.random()*items.length);
    return items[itemRandomico]
}

let numeros02 = [ 1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10];
let numerosRandomicos = retornarElementosRandomico02<number>(numeros02);
console.log(numerosRandomicos);

let paises02 = ["Brasil", "EUA", "Japão", "China", "Canadá"];
let elementosRandomicos = retornarElementosRandomico02<string>(paises02);
console.log(elementosRandomicos)


function exibirElementos<T>(Array: T[]):void{
    Array.forEach((elemento)=> {
        console.log(elemento)
    })
}
let number: number[] = [1, 2, 3, 4, 5]
let states: string[] = ['São Paulo', 'Rio de Janeiro', 'Bahia', 'Santa Catarina', 'Paraná'];

exibirElementos<number>(number)
exibirElementos<string>(states)