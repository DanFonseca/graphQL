const {ApolloServer, gql} = require ('apollo-server')
const {importSchema} = require ('graphql-import')
const resolvers = require ('./resolvers')
const pathSchema = importSchema('./schema/index.graphql')

const server = new ApolloServer ({
    typeDefs: pathSchema,
    resolvers: resolvers
})

server.listen().then(({url}) => {
    console.log(`showing url ${url}`)
})




