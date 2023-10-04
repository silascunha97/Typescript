function mensagemLog(mensagem:string, usuariosId?:number){
    const horaLog = new Date().toLocaleTimeString()
    console.log(horaLog, mensagem, usuariosId || 'Usuario não conectado');
}

mensagemLog('Atualizar Página')
mensagemLog('Usuario(a) logado(a) com sucesso', 778811 )

type Pessoa001 = {
    idFuncionario001: number;
    nome: string;
    idade?:number;
    email?:string;
};

let pessoa01: Pessoa001 ;


pessoa01 = {
    idFuncionario001: 112233,
    nome: 'Silas Augusto',
    idade: 26,
    email: 'test_test@mail.com'
}