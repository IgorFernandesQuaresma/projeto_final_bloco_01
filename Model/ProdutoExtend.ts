import { Produto } from "./Produto"


export class ProdutoExtend extends Produto {
    

    constructor (id: number, nome: string, descricao: string, preco: number) 
    {
            super (id, nome, descricao, preco)
        }
              
        public visualizar(): void{
            super.visualizar()
         
        }

}