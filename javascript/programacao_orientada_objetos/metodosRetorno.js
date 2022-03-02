/* ********   CLASSE DE CLIENTE ********  */
// Dentro das chaves terão os campos ou atributo. Os campos e atributos possem o mesmo conceito de variável, sua denominação que muda e algumas formas de utilização. 

class cliente { // Terei esse atributos, entende-se que todo cliente terá um nome, cpf, agencia e saldo. Propriedade/atributos/campos são denominações sinnnomos
    nome;
    cpf;

}

/* *********  CLASSE DE CONTA CORRENTE ********* */

class contaCorrente{ //Criei a class conta corrente

    agencia;
    saldo = 0; // Para colar um atributo como privado colocamos # na frente do nome da variável. Só conseguimos acessar esse valor dentro da classe

   // criamos um método dentro da classe
    sacar(valor){ // o parentese siginifica que é uma operação, então vamos fazer algo com esse sacar. 
         if(this.saldo >= valor ){
        this.saldo -= valor; // meu saldo será subtraido de acordo com esse valor
        return valor;
       
    }
}

    depositar(valor){
            if(valor <= 0) 
            {
               return; 
            } 
            this.saldo += valor;    
        }
};



/*  ***********  INSTANCIANDNO  A CLASSE CLIENTE *********** */

const contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);