
const form = document.querySelector('.form')
const tarefas = [];

function adicionaLinha(evento) {
    evento.preventDefault();
    const tarefa = document.querySelector('.tarefa')
    tarefas.push(tarefa.value)
    atualizaLista();
}

function removerLinha(index) {
    const removido = tarefas.splice(index, 1);
    atualizaLista();
    console.log('removido = ', removido[0])
}

function atualizaLista() {
    const lista = document.querySelector('.lista');
    lista.innerHTML = '';
    tarefas.forEach(function (elemento, index) {
        lista.innerHTML += `<li>${elemento} <button type="" id="${index}" onclick='removerLinha(${index})'>remover</button></li>`
    });
}

form.addEventListener('submit', adicionaLinha);