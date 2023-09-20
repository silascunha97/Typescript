const numMax:number = 10;
let numMin:number = 0;
for(let numMin = 0; numMin<numMax; numMin++){
    console.log(numMin)
}

for (let i = 0; i < 100 ; i++) {
    console.log(`${i} elefante incomoda muita gente... ${i+1} incomoda... incomoda muita mais`)
}

const arrayNumeros = [10, 20, 30, 40, 50]

for (const i of arrayNumeros) {
    console.log(i)
}

const arrayNumeros01 = [5, 4 ,3, 2 , 1 , 0]
const ordemNumerica:number[] = arrayNumeros01.sort()

for (const i in ordemNumerica) {
    console.log(i)        
}
