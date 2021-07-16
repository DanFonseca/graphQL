const {usuarios, perfis} = require('../data/db')

module.exports = {

    ola() {
        return 'Parabéns, sua primeira consulta em graphQl :)'
    },

    horaCerta() {
        return new Date().toLocaleDateString()
    },

    funcionario () {
        return {
            id: 1,
            nome: 'Jorgin da Sul',
            idade: 27,
            salario_atual: 10561.20,
            vip: true
        }
    },

    produtoEmDestaque () {
        return {
            nome: 'Batedeira Elétrica',
            desconto: 10,
            preco: 250
        }
    },

    usuarios () {
        console.log('users', usuarios)
        return usuarios
    },

    numeroDaMegasena() {
        const array = [0,0,0,0,0,0,0]
        return array.map(() => {
           const number =  Math.floor(Math.random()*60)
           if (array.includes(number)){
               console.log('entru')
                return  getOtherRandomNumber(number)
           }
           return number
        })
    },

    UsuarioById (_, {id}) {
        return usuarios.filter(u => u.id === id)[0]
    },

    perfilById(_, {id}) {
        return perfis.filter(u => u.id == id)[0]
    },

    perfis() {
        return perfis
    }
}

function getOtherRandomNumber (numberFound) {
    var number =  Math.floor(Math.random()*60)

    while (number === numberFound) {
        number =  Math.floor(Math.random()*60)
    }

    return number
}