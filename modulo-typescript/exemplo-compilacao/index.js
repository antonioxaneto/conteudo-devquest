function sendMessage(userName, isLogged) {
    console.log("Ol\u00E1 ".concat(userName, ". Voce ").concat(!isLogged ? " não" : "", " pode logar."));
}
var userName = "Neto";
var isLogged = true;

sendMessage(userName, isLogged)
