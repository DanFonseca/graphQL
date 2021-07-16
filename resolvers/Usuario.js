const perfis = require ('../data/db')

module.exports = {
    perfil (usuario) {
        console.log("entrou aqui")
        return perfis.filter(perfil => {
        return perfil.id === usuario.perfil
        })[0]
    }
}