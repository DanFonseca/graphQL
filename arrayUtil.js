class arrayUtil {

    getUsuarios() {
        return 
            [
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
}

export {arrayUtil};