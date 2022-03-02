/* ================ GETTERS E SETTERS =================

 ***** GETTERS *****

--> Alguns pontos importantes a serem destacados para o uso de getters são:

1) Pode ter um identificador do tipo numérico ou string.
2) Não deve ter nenhum parâmetro.
3) Não pode ser utilizado mais de um getter para uma mesma propriedade, assim como não pode haver uma propriedade comum com o mesmo nome do getter. 

  ***** sETTERS *****

--> Alguns pontos importantes a serem destacados para o uso de setters são:

1) Pode ter um identificador do tipo numérico ou string.
2) Deve ter exatamente um parâmetro.
3) Não pode ter a mesma nomenclatura para propriedade e função.

*/

/*  ***********  IMPORTANDO A CLASSE CLIENTE / ESTÁ NO ARQUIVO CLIENTE *********** */

import {Cliente} from "./modulos/Clientes.js";  // Aqui estou dizendo para importar a classe Cliente do arquivo Clinte.js
import {ContaCorrente} from "./modulos/ContaCorrente.js";


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