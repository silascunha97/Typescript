function somarNumeros(...numeros:number[]){
    let total = 0;
    numeros.forEach((numero) => (total += numero))

    return total
}

console.log(somarNumeros(30,70,50,30,20,50))

function listarFrutas(frase:string, ...frutas:string[]){
    return frase + ' ' + frutas.join(', ');
}

console.log(listarFrutas('Você precisa ir a feira para comprar... : ', 
"🍇",
"🍈",
"🍉",
"🍊",
"🍋",
"🍌",
"🍍",
"🥭"
    ),
);

class Produtos {
    public exibirProduto(...produtos:string[]):void {
        for (const produto of produtos) {
            console.log(produto)
        }
    }
}

const departamentoInformatica: Produtos = new Produtos()
console.log('Todos os produtos do departamento de informatica no estoque ... : ');

departamentoInformatica.exibirProduto(
    'Monitor',
    'Mouse',
    'Teclado',
    'Gabinete',
    'Webcam'
)