//acao de clique no botao 

$(document).ready(function () {

    carregarTarefa();

    //adicionar tarefa 
    $('#addtarefaBtn').on('click', function () {
        let tarefaText = $('#tarefainput').val();


        if (tarefaText.length > 0) {
            addTarefa(tarefaText);//passa o valor para a funcao que recebe tarefa
            salvarTarefa();
            $('#tarefainput').val('');//limpa inout de tarfa


        }
    });

    //adicionar tarefa 
    function addTarefa(text) {
        $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>')
    }

    //marcar/desmarcar tarefa como concluida
    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
        salvarTarefa();

    });


    //remover tarefa
    $(document).on('click', 'span', function (e) {
        e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (li)
        $(this).parent().fadeOut(500, function () { //pega a linha inteira (li) e remove lentamente(com efeito)
            $(this).remove();
            salvarTarefa();
        });
    });

    //SALVAR TAREFA

    function salvarTarefa() {
        let tarefas = $('#tarefaList').html();
        localStorage.setItem('tarefas', tarefas);
    }

    // Função para carregar tarefas salvas localmente
    function carregarTarefa() {
        let tarefas = localStorage.getItem('tarefas');
        if (tarefas) {
            $('#tarefaList').html(tarefas);
        }
    }





})