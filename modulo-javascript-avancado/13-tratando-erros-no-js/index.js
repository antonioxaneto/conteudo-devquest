let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"

        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve(true)
        }else{
            const mensagemDeErro = 'é necessário colocar a chaleira com a água e ligar o fogão se não teu cafézinho não vai ficar pronto nunca'
            reject(mensagemDeErro)
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

let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
    }catch(err){
        console.log(err)
    }finally{
        console.log('Finalizado o ritual de tomar o café, bora trabalhar')
    }
}

iniciarProcessoDeFazerCafe()