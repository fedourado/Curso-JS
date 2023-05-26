// Função que adiciona tarefa
function addTask() {

    // título da tarefa - o value no final pega o valor do input
    const taskTitle = document.querySelector('#task-title').value;

    if(taskTitle) {
        
        // clonar template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);

        // adiciona título ao span que será igual ao escrito pelo user
        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // adicionar tarefa na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);


        // adicionar o evento de remover
        const removeBtn = newTask.querySelector('.btn-li-remove').addEventListener('click', function(e) {
            removeTask(this);
        });

        // completar tarefa
        const doneBtn = newTask.querySelector('.btn-li-check').addEventListener('click', function() {
            completeTask(this); // this referencia aquela tarefa em específico
        });

        //limpar box quando add tarefa
        document.querySelector('#task-title').value = '';

    }
}

// função remover task
function removeTask(task) {

    task.parentNode.remove(true); // com o parentNode.remove ele remove o elemento pai, ou seja, a li

}

// função check task
function completeTask(task) {

    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done'); // verifica se tem o risco, se tiver ele remover o risco e se não tiver ele colocar
}

// Evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e) {

    e.preventDefault();

    addTask();

});