import { EmailValidator as MailVali, ZipcodeValidator } from "./index";
import {  } from "./zipcode-validator";

let email = 'silas@rlc.tec.br';
let validator = new MailVali();
let result = validator.isValid(email);

console.log(`O E-Mail ${email} é valido? ${result}`)

let validator2 = new ZipcodeValidator();

let result2 = validator2.isValid('12345')
console.log(`O CEP ${result2} é valido`)