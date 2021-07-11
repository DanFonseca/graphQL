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

    type Query {
        ola: String
        horaCerta: String
        funcionario: Usuario
    }
`

const resolvers = {
    Usuario: {
        salario (obj) {
            return obj.salario_atual
        }
    },

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