const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador" 

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`    
);


let contador = 0;
let destinoExiste = false
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}        


//  ao colocarmos um break dentro do laço estamos falando para o interpretador que quando ele chegar nessa linha ele deve sair do laço independentemente de outras condições.