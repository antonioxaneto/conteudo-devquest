function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}. Voce ${!isLogged? " não" : ""} pode logar.`)
}

const userName = "Neto"
const isLogged = true

sendMessage(userName, isLogged)