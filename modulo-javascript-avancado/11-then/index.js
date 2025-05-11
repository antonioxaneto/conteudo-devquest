let ferverAgua = (chaleiraEstaNoFogo, fogaoEstaLigado) => {
    return new Promise((resolve, reject) =>{
        if (chaleiraEstaNoFogo && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            console.log('é necessário colocar a chaleira com a água e ligar o fogão se não teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xícara ')
        resolve(true)
    })
}

let chaleiraEstaNoFogo = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogo, fogaoEstaLigado)
.then(() => {
    return passarOCafe();
})
.then(() => {
    return tomarCafe();
})
.then(() => {
    return lavarXicara();
})
.then(() => {
    console.log('Finalizando ritual do café, bora trabalhar');
})