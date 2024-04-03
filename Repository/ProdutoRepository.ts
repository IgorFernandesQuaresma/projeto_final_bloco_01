import { Produto } from "../Model/Produto";

export interface ProdutoRepository {

// metodos CRUD
CriarProduto(produto: Produto): void;
listarTodos(): void
consultarProdutoporId(numero: number): void;
atualizar(produto: Produto): void;
deletar(numero: number): void;

}