const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
console.log("Destinos possíveis:");
conosole.log(listaDeDestinos);

if(maiorDeIdade >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //removendo 
}