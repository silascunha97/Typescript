'Use Strict';
let diaNum = 5;
let nomeDia:string = "";

switch (diaNum){
    case 1:
        nomeDia = "domingo"
        break
    case 2:
        nomeDia = "Segunda"
        break
    case 3:
        nomeDia = "terça"
        break
    case 4:
        nomeDia = "quarta"
        break
    case 5:
        nomeDia = "quinta"
        break
    case 6:
        nomeDia = "Sexta"
        break
    case 7:
        nomeDia = "Sabado"
        break
    default:
        console.log("Por favor selecione um dia valido! ")
}
console.log(nomeDia)

let flor = 'sandalo';
switch (flor) {
    case 'rosa':
        console.log('Rosa são vermelhas')
        break;
    case 'violeta':
        console.log('violeta são azuis')
        break;
    case 'violeta':
        console.log('violetas são azuis')
        break;
    case 'sandalo':
        console.log('sandalo é rosa e branco')
        break;
    default:
        console.log('Por favor insira uma flor valida')
        break;
}