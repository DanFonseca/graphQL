const {ApolloServer, gql} = require ('apollo-server')

const typeDefs = gql`
    type Query {
        ola: String
        horaCerta: String
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Parabéns, sua primeira consulta em graphQl :)'
        },

        horaCerta() {
            return new Date().toLocaleDateString()
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