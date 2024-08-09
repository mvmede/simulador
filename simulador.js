class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularTotal() {
        return this.preco * this.quantidade;
    }

    exibirProduto() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`);
    }
}

let produto1 = new Produto("Camisa", 50, 2);

produto1.exibirProduto();  
console.log(`Total: R$${produto1.calcularTotal()}`); 