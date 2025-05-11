let pessoas = [
    { nome: 'Neto', idade: 27 },
    { nome: 'Antonio', idade: 27 },
    { nome: 'Antonio Neto', idade: 26 }
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)

let nomeDasPessoas = pessoas.map(pessoa =>
    pessoa.nome + " tem " + pessoa.idade + " anos de idade ")

console.log(nomeDasPessoas)