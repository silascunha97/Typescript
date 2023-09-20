let contador001 = 0;
while (contador001 <= 15) {
    console.log(contador001);
    contador001++;
}

let num:number = 1;
while (num <= 20) {
    if(num % 5 == 0){
        console.log("Primeiro numero mútiplo de 5 entre 1 a 20 é...: ", num);
        break
    }
    num++;
}

let contadorUsuario = 0;
const usuario01:string[] = ['Silas', "Victor", 'Lara'];
while (usuario01[contadorUsuario]) {
    console.log('Usuarios ...: ', usuario01[contadorUsuario]);
    contadorUsuario++;
}

let contador002= 0;
do{
    console.log(contador002)
    contador002++
}while (contador002 < 5) 

