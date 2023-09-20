const max = 100;
let counter = 0;

if (counter < max) {
    counter++;
}
console.log(counter)

const numeroMax:number = 100;
let contador:number= 100;

if (contador < numeroMax) {
    contador++;
}

console.log(contador)

const permissaoDirigir: number = 18;

if (permissaoDirigir >= 18) {
    console.log("Vocé está habilitado pra dirigir");
}else{
    console.log("Você não pode digirir")
}
console.log(permissaoDirigir)

let desconto:number;
const valorCompra:number = 14;

if (valorCompra > 0 && valorCompra <= 5) {
    desconto = 5;
} else if (valorCompra > 5 && valorCompra <= 10){
    desconto = 10;
}else{
    desconto = 15;
}

console.log(`Você teve um desconto de ...: ${desconto}% desconto`);

const idadeVotacao:number = 16;

if (idadeVotacao >= 16) {
    console.log("Você já pode votar")
}else{
    console.log("Você não pode votar")
}

const podeVotar = (idadeVotacao >= 18) ? 'Você já pode votar' : "Você não pode votar";

console.log(podeVotar)