export {}

const valor: unknown = 'Olá, pessoal'
console.log((valor as string).length)

const nome: unknown = 'Silas Cunha';
console.log((nome as string).toLowerCase())

const carro = 'Corolla'

const tamanhoString: number = (<string>carro).length
console.log(`O tamanho da strubg é ...: ${tamanhoString}`)