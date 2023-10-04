function descontoCompra(preco: number, desconto=0.08){
    return preco * (1 - desconto);
}

console.log(descontoCompra(100));

function somarNumeros_01(...numeros: number[]){
    let total = 0;
    numeros.forEach((numeros) => (total += numeros))

    return total
}


function exibirMensagem(nome: string, saudar = 'Olá pessoa'){
    return saudar + ' ' + nome + '!';
}

console.log(exibirMensagem('Silas Augusto'))

function exibirNome(nome:string, sobrenome = 'Cunha'){
    return nome + ' ' + sobrenome
}

const resultado_1 = exibirNome('Silas')
console.log()