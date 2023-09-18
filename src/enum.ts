enum Idioma {
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    Ingles = 'EN',
    Frances = 'FR'
}
console.log(Idioma);

enum Dia {
    Segunda = "SEG",
    terca = "TER",
    Quarta = "QUA",
    Quinta = "QUI",
    Sexta = "SEX",
    Sabado = "SAB",
    Domingo = "DOM"
}
console.log(Dia)

const enum Comida {
    Hamburger,
    Massa,
    Pizza,
    Torta,
    Churrasco
}

function comida(c: Comida){
    return 'Comida Muito apetitosas! ';
}

console.log(comida(Comida.Massa));

enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
}

if (concluidaTarefa.status === Tarefa.Done) {
    console.log("Enviar E-Mail!!! Tarefa Concluida");
}else{
    console.log("Tarefa não concluida!!!")
}