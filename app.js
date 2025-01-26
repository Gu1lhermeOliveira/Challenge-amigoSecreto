//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// 1 - adicionar amigos a lista
// 2 - sortear esses amigos adicionados a lista
// 3 - reiniciar o sorteio ao clicar no botão e limpar a lista de nomes adicionados

//declarando variavel do tipo array
let nomes = [];

atualizarLista();

// Função para adicionar um amigo
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value;

    // Se o campo amigo for vazio, mostre um alerta
    if (amigo == "") {
        alert('Por favor insira um nome');
    } else {
        // Adicionar o nome à lista e atualizar a exibição
        nomes.push(amigo);
        input.value = "";
        atualizarLista();

        // Habilitar o botão de sorteio
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista

    // Adiciona cada amigo como um item na lista
    for (let i = 0; i < nomes.length; i++) {
        lista.innerHTML += `<li>${i + 1}. ${nomes[i]}</li>`;
    }
}


// Função para sortear um amigo
function sortearAmigo() {
    if (nomes.length > 0) {
        // Sorteia um índice aleatório
        let indice = Math.floor(Math.random() * nomes.length);
        let nomeSorteado = nomes[indice];

        // Exibe o resultado do sorteio
        document.getElementById('resultado').innerHTML = `<li>O amigo secreto é - ${nomeSorteado}</li>`;

        // Habilitar o botão de reinício
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        alert('Adicione pelo menos um amigo antes de sortear.');
    }
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    // Limpa o array de nomes
    nomes = [];

    // Atualiza a lista e o resultado
    atualizarLista();
    document.getElementById('resultado').innerHTML = "";

    // Desabilita o botão de reinício
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
