// Criaremos um clss, a class é como se fosse um molde para sempre usarmos, normalmente é utilizada quando precisamos de um código a ser sempre usado e replicado 

/* ********  CLASSE DE CLIENTE ********  */
class cliente { // Terei esse atributos, entende-se que todo cliente terá um nome, cpf, agencia e saldo. Propriedade/atributos/campos são denominações sinnnomos
    nome;
    cpf;

}
// Dentro das chaves terão os campos ou atributo. Os campos e atributos possem o mesmo conceito de variável, sua denominação que muda e algumas formas de utilização. 



/* *********  CLASSE DE CONTA CORRENTE ********* */

class contaCorrente{

    agencia;
    saldo;

   // criamos um método dentro da classe
    sacar(valor){ // o parentese siginifica que é uma operação, então vamos fazer algo com esse sacar. 
         if(this.saldo >= valor ){
        this.saldo -= valor; // meu saldo será subtraido de acordo com esse valor
    }else{
        return "Saldo insuficiente!!!!"
    }
}

    };



/*  ***********  INSTANCIANDNO  A CLASSE CLIENTE *********** */
const cliente1 = new cliente(); // quando coloco aqui NEW CLIENTE(), eu instaciando um cliente, ou seja, estou criando uma instância da minha classe. 
const cliente2 = new cliente();
const cliente3 = new cliente();

/* ******** ACESSANDO A CLASS APÓS INSTANCIAR E ADICIONANDO DADOS ********  */

 cliente1.nome = "Jaiana";
 cliente1.cpf = 11122233309;
 
 cliente2.nome = "Ivan";
 cliente2.cpf = 565566325;


 cliente3.nome = "Socorro";
 cliente3.cpf = 02165465456;
 

/* ***** IMPRIMINDO NO CONSOLE  ******  */

console.log("Nome cliente 1: " + cliente1.nome + ", Nome cliente 2 : " + cliente2.nome + ", Nome cliente 3: " +  cliente3.nome);


/* INSTANCIANDO A CLASSE CONTA CORRENTE */

let contaCorrenteJaiana = new contaCorrente();
contaCorrenteJaiana.saldo = 0;
contaCorrenteJaiana.agencia = 1001;

// **  Atualizando saldo 

contaCorrenteJaiana.saldo = 100;




/* --------- ANALISANDO CONDIÇÃO DO SAQUE SEM O MÉTODO ---------- */

/* let valorSacado = 100;  */

/* if(contaCorrenteJaiana.saldo >= valorSacado){
    contaCorrenteJaiana.saldo -= valorSacado;
}else{
    return "Saldo insuficiente!!!!"
} */

// Criamos esse if para se caso o saldo for maior que o saque poder sacar o dinheiro. Mas, para ficar mais legível e compreensivel o código, vamos adaptar o nosso código e acrescentar métodos, os métodos ele dar funcionalidades, o seu conceito é bem parecido com funções, no entano, na programação orientada a objetos é chamado de metodos. Então, na class ContaCorrente criarei uma operação (um método) chamado sacar

// Criar o método dentro da class é o mais indicado pq assim, poderemos usar como molde 
// console.log( contaCorrenteJaiana.saldo - valorSacado);

console.log("O saldo de " + cliente1.nome + ", é: " +  contaCorrenteJaiana.saldo);



/* ********** SE PODE SACAR OU NÃO / USANDO O MÉTODO QUE ESTÁ NA CLASS CONTACORRENTE ********* */


console.log(contaCorrenteJaiana.sacar(200));