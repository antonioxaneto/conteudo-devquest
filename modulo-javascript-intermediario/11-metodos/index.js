let usuario = {
    nome: 'Neto',
    excluir: function() {
        console.log('O usuário, ' + this.nome +  ' foi excluido!')
    }
}

usuario.excluir()