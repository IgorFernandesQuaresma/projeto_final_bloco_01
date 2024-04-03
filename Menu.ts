import { Produto } from "./Model/Produto";
import { ProdutoExtend } from "./Model/ProdutoExtend";
import { ProdutoController } from "./Controller/ProdutoController";

const readline = require("readline-sync")
export function main() {

    let opcao, id, preco:number ;
    let nome, descricao: string;
    let produto: ProdutoController = new ProdutoController;
    let pr1: ProdutoExtend = new ProdutoExtend(produto.gerarId(), "Celular", "Celular marca abc 256GB" , 3000);
    let pr2: ProdutoExtend = new ProdutoExtend(produto.gerarId(), "Celular", "Celular marca abc 256GB" , 3000)
    produto.CriarProduto(pr1)
    produto.CriarProduto(pr2) 
    

        while (true) {
console.log("*****************************************************");
console.log("                                                     ");
console.log("                    Produtos                         ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Criar Produto                        ");
console.log("            2 - Listar todas os Produtos             ");
console.log("            3 - Buscar produto por ID                ");
console.log("            4 - Atualizar Produto"                    );
console.log("            5 - Apagar Produto                       ");
console.log("            0 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");


console.log("Digite a opção desejada");

opcao = readline.questionInt ("");

switch(opcao) {
    case 1:
        console.log("Vamos criar seu produto.");

       
        nome = readline.question("Digite o nome do produto: ")

        descricao = readline.question("Digite a descricao do produto: ")
        
        preco = readline.questionFloat("Digite o Preco do Produto: ").toFixed(2)


        produto.CriarProduto(new ProdutoExtend(produto.gerarId(), nome, descricao, preco))
        
    aguardar()    
    break

    case 2:

        console.log("Vamos listar todos os produtos.");
        produto.listarTodos()
        aguardar()  
        break;

    case 3: 

    console.log("Vamos buscar seu produto por ID.");
    id = readline.questionInt("Digite o numero da ID do produto: ")
    produto.consultarProdutoporId(id) 
        aguardar()   
        break;

    case 4:
            console.log("Vamos atualizar o produto selecionado.");
            id = readline.questionInt("Digite o ID do produto: ");
        
        let buscaProduto = produto.buscarNoArray(id);
    
        if (buscaProduto != null) {
            id = buscaProduto.id
            nome = readline.question("Digite um novo nome: ")
            descricao = readline.question("Digite uma nova descricao: ")
            preco = readline.questionFloat("Digite um novo preco: ").toFixed(2)
            

            produto.atualizar(new ProdutoExtend(id, nome, descricao, preco));

        } else { 
            console.log(`Não existe nenhum produto com o ID ${id}`);
        }
    
    
        aguardar()      
        break;

    case 5:
        console.log("Vamos apagar o produto selecionado.");
        id = readline.questionInt("Digite o ID do produto que quer deletar: ")
        produto.deletar(id)
    aguardar()      
    break;

    case 0:  
        console.log("Saindo do programa...");
            sobre()
        process.exit(0);
    default:

        console.log("Opção inválida! Por favor, escolha uma opção válida.");

        break;
}    
    console.log("Pressione Enter para continuar...");
    readline.question("");

}}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Igor Fernandes Quaresma ");
    console.log("Generation Brasil");
    console.log("https://github.com/IgorFernandesQuaresma");
    console.log("*****************************************************");
}

export function aguardar(): void {
    console.log("\n*****************************************************");
    console.log("Executando...");
    console.log("*****************************************************");
}

main()