const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador" 
let destinoExiste = false;
const podeComprar =  idadeComporador >= 18 || estaAcompanhada == true;

/* LISTA DE DESTINO */
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`    
);


// CONFERINDO SE DESTINO EXISTE

let contador = 0 // O contador além de ser contador, a cada contada ele vai interando em 1 item do array    '
while(contador < 3){
    if(listaDestinos[contador] == destino){
        console.log("Destino existe") 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){ // se pode comprar e destino existe for verdadeiro
    console.log("Boa viagem!!");
}else {
    console.log("Desculpe tivemos um erro");
}


for( let cont = 0  ; cont < 3  ; cont++  ){
    if(listaDestinos[cont] == destino){
        destino = true;
    }
}