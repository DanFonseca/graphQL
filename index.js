const {ApolloServer, gql} = require ('apollo-server')

const typeDefs = gql`

    type Usuario {
        id: ID
        nome: String
        email: String
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Int
        precoComDesconto: Float 
    }

    type Query {
        ola: String
        horaCerta: String
        funcionario: Usuario
        produtoEmDestaque: Produto
        numeroDaMegasena: [Int]!
    }
`

const resolvers = {
    
    Usuario: {
        salario (obj) {
            return obj.salario_atual
        }
    },

    Produto: {
        precoComDesconto (produto) {
            const porcentagemDeDesconto = produto.desconto / 100
            const desconto =  produto.preco - (produto.preco * porcentagemDeDesconto)
            if (desconto == 0 || desconto < 0) return 0.0

            return desconto
        }
    },



    //EntryPoint
    Query: {
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
        }
    }
}

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`showing url ${url}`)
})

function getOtherRandomNumber (numberFound) {
    var number =  Math.floor(Math.random()*60)

    while (number === numberFound) {
        number =  Math.floor(Math.random()*60)
    }

    return number
}