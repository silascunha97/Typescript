function error(message: string ): never{
    throw new Error(message);
}

console.log(error('Erro de mensagem'));


function rejectMessage(){
    return error('Error de mensagem - 02');
}

console.log(rejectMessage())

const algumaCoisaVoid: void = null;
//const algumaCoisanever: never = null

console.log(algumaCoisaVoid)
//console.log(algumaCoisanever)