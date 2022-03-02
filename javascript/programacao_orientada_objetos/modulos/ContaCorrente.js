/* *********  CLASSE DE CONTA CORRENTE ********* */
// Podemos organizar de forma que cada classe fique em um arquivo 
// O nome do Arquivo iniciar com uma letra maisucula, porque indicará que aquele arquivo trata-se de uma classe
// Dentro das chaves terão os campos ou atributo. Os campos e atributos possem o mesmo conceito de variável, sua denominação que muda e algumas formas de utilização. 

/*  ***********  IMPORTANDO A CLASSE CLIENTE / ESTÁ NO ARQUIVO CLIENTE *********** */

import { Cliente }  from "./Clientes.js"

/*  ***********  EXPORTANDO A CLASSE CONTA CORRENTE *********** */

export class ContaCorrente{ //Criei a class conta corrente
    
   static numeroDeContas = 0; //Já no caso do numeroDeContas, queremos que ele seja inerente à classe como um todo, e não das instâncias individualmente. Para isso, não poderemos declará-lo da mesma forma que os outros atributos. A ideia é trabalharmos com um atributo estático, do tipo que reflete as alterações em todos os objetos daquela classe. Para isso usaremos a palavra reservada static.
    agencia;
    _cliente;
    _saldo = 0; // Para colar um atributo como privado colocamos # na frente do nome da variável. Só conseguimos acessar esse valor dentro da classe

    // **** SET ****
    // Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código
    set cliente(novoValor){
        if(novoValor instanceof Cliente){ // Se meu novo valor for uma nova instância de cliente
            this._cliente = novoValor;
        }
        
    }
  

    // **** GET
    //
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }


   // ************* CONSTRUCTOR **********

    constructor(cliente, agencia){

    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1 // Acessando a variável numeroDeContas
    }


   // ************* MÉTODO SACAR **********
    sacar(valor){ // o parentese siginifica que é uma operação, então vamos fazer algo com esse sacar. 
         if(this._saldo >= valor ){
        this._saldo -= valor; // meu saldo será subtraido de acordo com esse valor
        return valor;
       
    }
}

   // ************* MÉTODO DEPOSITAR **********
    depositar(valor){
            if(valor <= 0) 
            {
               return; 
            } 
            this._saldo += valor;    
        }

    
        // ************* MÉTODO TRANSFERIR **********
    transferir(valor, conta){
        const valorSacado = this.sacar(valor); // estou sacando esse valor (da minha conta)
        conta.depositar(valorSacado); // eu estou depositando esse valor na conta que coloquei em parâmetro
    }
};

