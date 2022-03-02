
// Quando eu for buscar as tags tenho que analisar a estrutura do HTML 
var paciente = document.querySelector("#primeiro-paciente");  // selecionamos a tag pai que é o primeiro paciente

var tdPeso = paciente.querySelector(".info-peso"); // Dentro do paciente, selecionamos o filho que queremos buscar que é .info-peso 
var peso = tdPeso.textContent; // informamos que a variavel peso recebera o conteudo que esta na tdPeso

var tdAltura = paciente.querySelector(".info-altura"); // buscamos o info-altura, que esta dentro do pai
var altura = tdAltura.textContent; // informamos que a variavel altura reberá o conteúdo do tdAltura


var tdImc = paciente.querySelector(".info-imc"); // selecionamos o .info-imc, que esta dentro do primeiro paciente


// VALIDAÇÃO

var pesoEhValido = true;  // crio a variavel para ajudar na validação quando eu foi criar os if
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false; // aqui eu digo que a variavel é falso quando ocorrer essa condição
    tdImc.textContent = 'Peso inválido';
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false; // Aqui eu digo que essa variável é falsa quando ocorrer essa condição
    tdImc.textContent = 'Altura inválido';
    
}

if  (pesoEhValido && alturaEhValida ) { // aqui as variaveos são verdadeiras nessa condição 

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}











