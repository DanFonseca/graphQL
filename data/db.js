const usuarios =  [
            {
                id: 1,
                nome: "Joao Pereira",
                email:  "joao@gmail.com",
                idade: 17,
                vip: false,
                perfil: 1,
                status: "ATIVO"
            },
            {
                id: 2,
                nome: "Ana Souza",
                email:  "ana.souza@gmail.com",
                idade: 24,
                salario: 10.523,
                vip: true,
                perfil: 2,
                status: "BLOQUEADO"
            },
            {
                id: 3,
                nome: "Pedrinho da Silva",
                email:  "pedro.dsva@gmail.com",
                idade: 25,
                salario: 2.324,
                vip: false,
                perfil: 1,
                status: "INATIVO"
            }
        ]

const perfis =  [
        {
            id: 1,
            nome: "Administrador"
        },
        {
            id: 2,
            nome:"Comum"
        }
    ]


module.exports = {usuarios, perfis}