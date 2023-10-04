function somarNumeros01(a: number, b: number){
    return a+b;
}

const resultadoSoma = somarNumeros(2, 2);
console.log(resultadoSoma)

const saudar = function(mensage:string){
   return mensage;
};

console.log(saudar('Olá desenvolvedor!!'))

let myArrowFunction = (x:number, y:number) =>{
   return x+y
}

const saudar02 = new Function('Mensagem', 'return "Fala" + mensagem');
console.log(saudar02('Galera!'))

function informarDadosPessoa01(idPessoa: number, nome: string, email?: string){
    console.log('id funcionario...:', idPessoa, 'Nome ...:', email);
    if(email != undefined ) console.log('E-mail ...:', email);
}

informarDadosPessoa01(556677, 'Silas Augusto')
informarDadosPessoa01(990077, 'Silas Augusto', 'Silas_test@email.com')
/*Informar dados
    ID funcionario ... : 556677, Silas Augusto
    ID funcionario ... : 990077, Silas Augusto, 
    E-Mail Silas_test@email.com
*/

function informarDadosPessoa02(idPessoa: number, nome: string, email?:string){
    console.log('Id funcionario ...:', idPessoa, 'Nome ... : ', nome)
    if (email != undefined) console.log('E-Mail ... : ', email)
}

informarDadosPessoa02(775544, 'Silas Augusto da Cunha');
informarDadosPessoa02(994411, 'Silas Augusto da Cunha', 'test_Silas@email.com');

