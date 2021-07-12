import {ApolloServer, gql} from 'apollo-server'   
//import  {arrayUtil}  from './arrayUtil.js'

const typeDefs = gql`

    type Usuario {
        id: Int
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
        usuarios: [Usuario]!
        UsuarioById(id: Int) : Usuario
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

        usuarios () {
            return getUsuarios()
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
            const usuarios = getUsuarios()
            return usuarios.filter(u => u.id == id)[0]
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


function getUsuarios() {
    return [
            {
                id: 1,
                nome: "Joao Pereira",
                email:  "joao@gmail.com",
                idade: 17,
                vip: false
            },
            {
                id: 2,
                nome: "Ana Souza",
                email:  "ana.souza@gmail.com",
                idade: 24,
                salario: 10.523,
                vip: true
            },
            {
                id: 3,
                nome: "Pedrinho da Silva",
                email:  "pedro.dsva@gmail.com",
                idade: 25,
                salario: 2.324,
                vip: false
            }
        ]
    
}