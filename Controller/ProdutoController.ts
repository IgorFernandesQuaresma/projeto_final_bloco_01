import { Produto } from "../Model/Produto";
import { ProdutoRepository } from "../Repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>(); //cria o array onde irá salvar os itens
    public id:number = 0;

    public buscarNoArray(id: number): Produto | null {  //metodo auxiliar buscarNoArray
        for (let produto of this.listaProdutos) {
            if(produto.id === id)

            return produto
        }

        return null
    }

    public gerarId(): number { //metodo auxiliar Gerar id
        return ++ this.id
    }


    CriarProduto(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log(`Produto cadastrado com sucesso`);
    }


    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar()
        }
    }

    consultarProdutoporId(id: number): void {
        let produto = this.listaProdutos.find(produto => produto.id === id);
        if (produto) {
            console.log(`O produto é ${produto.nome} e custa R$ ${produto.preco}`); 
   
        } else {
            console.log(`Nenhum produto encontrado com o ID ${id}`);
        }
    }


    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);
    
        if (buscaProduto != null) {
            const indice = this.listaProdutos.indexOf(buscaProduto);
            this.listaProdutos[indice] = produto; // Atualiza o produto na lista de produtos
            console.log(`O produto ${produto.nome} foi atualizado com sucesso`);
        } else {
            console.log(`O produto com o ID: ${produto.id} não foi encontrado`);
        }
    }
    


    deletar(id: number): void {
        let buscarProdutos = this.buscarNoArray(id);
        if (buscarProdutos != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProdutos), 1)
            console.log(`O produto do ID: ${id} foi apagado com sucesso`)
        } else {
            console.log(`Produto não identificado`)
        }

    } }