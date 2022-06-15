const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

/*O evento onSubmit do JavaScript é utilizado para automatizar tarefas.
Pode fazer o navegador validar as informações que foram enviadas através de um formulário antes que o servidor as receba.
o evento onSubmit executa uma série de comandos (ou apenas um) no momento em que o visitante de um site clica no botão de envio de um formulário.*/

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input'); //Obtém o valor do input.
	addTask(inputField.value); //addTask para adicionar o valor do input como uma tarefa.
	form.reset(); //Após a inclusão de um valor obtido pelo input, reseta a operação para adicionar outra tarefa.
};

function addTask(description) { //Função para adicionar uma tarefa.

	//A função createElement() irá criar um elemento HTML para ser, posteriormente, inserido em um documento HTML.
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input'); 
	const taskLabel = document.createElement('label');

	/*createTextNode é utilizado para escrever um texto no html. 
	O document.createTextNode() vai criar um elemento e retorná-lo para utilizá-lo da forma que quiser.*/
	const taskDescriptionNode = document.createTextNode(description); 
	//setAttribute() Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	/*appendChild insere um novo valor dentro de um elemento já existente, ou adiciona o elemento caso não exista.
	O método appendChild() insere um novo nó na estrutura do DOM de um documento,
	e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente.*/
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}