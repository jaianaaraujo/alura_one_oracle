/* ********   CLASSE DE CLIENTE ********  */
// Podemos organizar de forma que cada classe fique em um arquivo 
// O nome do Arquivo iniciar com uma letra maisucula, porque indicará que aquele arquivo trata-se de uma classe
// Dentro das chaves terão os campos ou atributo. Os campos e atributos possem o mesmo conceito de variável, sua denominação que muda e algumas formas de utilização. 

 export class Cliente { // coloco a palavra reservada na frente da class EXPORT para informar que quero exportar a definição do que aquela class está fazendo 
    nome; // Terei esse atributos, entende-se que todo cliente terá um nome, cpf, agencia e saldo. Propriedade/atributos/campos são denominações sinnnomos
    _cpf;

    get cpf() {
      return  this._cpf;
    }

// ******* CONTRUCTOR ********** 
    constructor(nome, cpf){ // método especial em uma classe que inicializa objetos dessa classe
                           // Os construtores insere caracteristicas ou executa qualquer instrução inciial necessária 
    this.nome = nome;
    this._cpf = cpf; 

    }
}


/*  ******** EXEMPLO DE CHAMADA ********

const cliente1 = new Cliente("Jaiana", 45435132); 

// perceba que usei o construtor para poder colocar os dados aqui como parâmetro;

*/