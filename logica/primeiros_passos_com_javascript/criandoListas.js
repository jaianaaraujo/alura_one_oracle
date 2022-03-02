console.log(`Trabalhando com listas`);


console.log(`Destinos possíveis`);



const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDestinos);

/* Adicionando na lista  */
listaDestinos.push(`Curitiba`);
console.log(listaDestinos);

/* Excluindo da lista */
listaDestinos.splice(2, 1);

console.log(listaDestinos);

/* O que eu quero acessar */

console.log(listaDestinos[2], [1]);