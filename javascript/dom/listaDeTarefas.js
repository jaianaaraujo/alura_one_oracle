//***********  FUNÇÃO CRIAR TAREFA ********
const criarTarefa = (evento) => {
    
     evento.preventDefault(); // ele vai previnir o comportamento padrão de enviar rápido a resposta. E assim poderemos capturar a informação 

    const input = document.querySelector('[data-form-input]'); // acessando o data-form-input
    const valor = input.value; // aqui estou salvando o valor inserido no input
    
    const lista = document.querySelector('[data-list]'); // acesso a . Ul é filho da div, e pai da li

   const tarefa =  document.createElement('li'); // criando um elemento li. Li é filho de UL
tarefa.classList.add('task');
   const conteudo = `<p class="content">${valor}</p> `; // criei uma váriavel armazenando essa frase, usamos o tampleteString porque assim poderemos interpolar

   tarefa.innerHTML = conteudo; 

   lista.appendChild(tarefa); // Agora coloco a li(filha) dentro da ul(pai)
   input.value = " " // depois de imprimir o valor, aqui estou zerando as informações
}

// Precisamos do tipo do evento, do elemento que vai receber o evento e o que vai acontecer quando o evento for disparado

// PARAMETRO DA FUNÇÃO: geralmente eu quero saber qual elemento que estou clicando. Ele me passa esse tipo de informação. O navegador, quando está lidando com esse tipo de evento, passa um objeto que contém informações sobre o evento. Nós podemos passar esse objeto como parâmetro dessa nossa função.

/* ********** BOTÃO **********  */

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);






