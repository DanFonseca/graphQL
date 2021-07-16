const {perfis} = require ('../data/db')

module.exports = {
    perfil (usuario) {
        return perfis.filter(perfil => {
        return perfil.id === usuario.perfil
        })[0]
    }
}