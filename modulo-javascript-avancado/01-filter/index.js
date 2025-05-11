let pessoas = [
    { nome: 'Antonio', idade: 27 },
    { nome: 'Neto', idade: 27 },
    { nome: 'Antonio Neto', idade: 26}
]

// let pessoasComIdadeDe27Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 27){
//         pessoasComIdadeDe27Anos.push(pessoas[i])
//     }
// }

// console.log(pessoasComIdadeDe27Anos)

let pessoasComIdadeDe27Anos = pessoas.filter((pessoa) => pessoa.idade === 27)

console.log(pessoasComIdadeDe27Anos)