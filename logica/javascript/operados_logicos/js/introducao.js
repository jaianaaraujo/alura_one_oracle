var paciente = document.querySelector("#primeiro-paciente");  // selecionamos a tag pai que é o primeiro paciente

var tdPeso = paciente.querySelector(".info-peso"); // Dentro do paciente, selecionamos o filho que queremos buscar que é .info-peso 
var peso = tdPeso.textContent; // informamos que a variavel peso recebera o conteudo que esta na tdPeso

var tdAltura = paciente.querySelector(".info-altura"); // buscamos o info-altura, que esta dentro do pai
var altura = tdAltura.textContent; // informamos que a variavel altura reberá o conteúdo do tdAltura


var tdImc = paciente.querySelector(".info-imc"); // selecionamos o .info-imc, que esta dentro do primeiro paciente

var imc = (peso / (altura * altura)) * 10; // agora calculamos

tdImc.textContent = imc;  // dizemos que o tdImc.context o conteudo dele sera colocado no html e recebera o resultado do calculo na variavel imc