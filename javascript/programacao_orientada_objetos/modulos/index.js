/* *********  EXECUÇÃO DE CÓDIGO ********* */
// Oraganizei as classes em arquivos diferentes, lemnrando que o nome dos arquivos iniciam com letra maiusculas para indicar que aquele arquivo trata-se de uma classe dentro. 

/*  ***********  IMPORTANDO A CLASSE CLIENTE / ESTÁ NO ARQUIVO CLIENTE *********** */

import {Cliente} from "./Clientes.js";  // Aqui estou dizendo para importar a classe Cliente do arquivo Clinte.js
import {ContaCorrente} from "./ContaCorrente.js";


/*  ***********  INSTANCIANDNO  A CLASSE CONTA-CORRENTE *********** */

let cliente1 = new Cliente(); 
cliente1.nome = 'Ricardo';


let cliente2 =new Cliente();
cliente2.nome = 'Ivan';

/*  ***********  INSTANCIANDNO  A CLASSE CONTA-CORRENTE *********** */

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1; // Aqui estou dizendo que cliente dessa conta corrente é ricardo

// DEPOSITAR
contaCorrenteRicardo.depositar(2000);

// SACAR
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);

/* *************  CRIANDO UMA NOVA CONTA *********** */

let conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2);

// TRANSFERIR
let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2);

/* **************** CONTADOR NÚMERO DE CONTAS ************* */

//let numeroDeContas = 