const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador" 

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`    
);


let contador = 0 // O contador além de ser contador, a cada contada ele vai interando em 1 item do array    '
while(contador < 3){
    if(listaDestinos[contador] == destino){
        console.log("Destino existe") 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 