// setTimeout(() => {
//     alert('Olá mundo!')
// }, 3000)

// setTimeout(() => {
//     console.log('console dentro do setTimeout')
// }, 3000);

// setInterval(() => { //     console.log('Executando a cada 3 segundos')
 // }, 3000);

// console.log('console depois do setTimeout')

 const idDoIntervalo = setInterval(() => {        console.log('Executando a cada 3 segundos')
}, 3000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()