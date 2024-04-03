export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _descricao: string
    private _preco: number

    constructor (id: number, nome: string, descricao: string, preco: number){
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
    }

    
    public get id(){
        return this._id;
    }

    public set id(id: number){
        this._id = id;
    }



    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get descricao(){
        return this._descricao;
    }

    public set descricao(descricao: string){
        this._descricao = descricao;
    }

    public get preco(){
        return this._preco;
    }

    public set preco(preco: number){
        this._preco = preco;
    }

    public visualizar(): void{
        
        console.log("***************************************");
        console.log("           Dados do Produto            ");
        console.log("***************************************");
        console.log("Nome do produto é: ", this._nome);
        console.log("Codigo do produto é: ", this._id);
        console.log("Descricao: ", this._descricao);
        console.log("E custa: ", this._preco);
    }
        
    }

    

