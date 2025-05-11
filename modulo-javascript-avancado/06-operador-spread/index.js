const pessoas = ['Antonio', 'Neto', 'Antonio Neto']
console.log(...pessoas)

/* CONCATENAR DOIS ARRAYS */

// let pessoas1 = ['Antonio', 'Neto', 'Antonio Neto']
// let pessoas2 = ['Joao', 'José', 'Maria']

// // pessoas1 = pessoas1.concat(pessoas2)

// pessoas1 = [ ...pessoas1, ...pessoas2 ]
// console.log(pessoas1)

/* CLONAR OBJETO */

const pessoa1 = { nome: 'Antonio', idade: 27 }

const objetoClonado = { ...pessoa1 }
console.log(objetoClonado)
console.log(pessoa1)