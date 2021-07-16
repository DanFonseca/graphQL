module.exports = {
    precoComDesconto (produto) {
        const porcentagemDeDesconto = produto.desconto / 100
        const desconto =  produto.preco - (produto.preco * porcentagemDeDesconto)
        if (desconto == 0 || desconto < 0) return 0.0

        return desconto
    }
}