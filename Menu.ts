const readline = require("readline-sync")
export function main() {

    let opcao:Number ;

        while (true) {
console.log("*****************************************************");
console.log("                                                     ");
console.log("               Medicamentos                          ");
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
    aguardar()    
    break

    case 2:
        console.log("Vamos listar todos os produtos.");
        aguardar()  
        break;

    case 3:  
    console.log("Vamos buscar seu produto por ID.");
        aguardar()   
        break;

        case 4:
            console.log("Vamos atualizar o produto selecionado.");
    
        aguardar()      
        break;
        
     

    case 5:
        console.log("Vamos apagar o produto selecionado.");
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