"use strict"

let num1:number = 23.0;
let num2:number = 0x78cf;
let num3:number = 0o577;
let num4:number = 0b110001;

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

let big1: bigint = 9007199254740997n;
let big2: bigint = 0b10000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000000000003n;
let big4: bigint = 0o4000000000000000003n;
console.log(big1)
console.log(big2)
console.log(big3)
console.log(big4)