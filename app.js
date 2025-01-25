//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        inputAmigo.value = ''; // Limpa o campo de entrada

        atualizarListaAmigos();
    } else if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado!");
    } else {
        alert("Por favor, digite um nome válido!");
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista existente

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto e exibir o resultado
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário ao menos 2 amigos para realizar o sorteio.");
        return;
    }

    // Embaralha a lista de amigos
    let amigosEmbaralhados = [...amigos];
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    // Atribui os amigos secretos de forma aleatória
    let resultados = [];
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        let amigo = amigosEmbaralhados[i];
        let amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
        resultados.push(`${amigo} tirou ${amigoSecreto}`);
    }

    exibirResultado(resultados);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultados) {
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpa o resultado anterior

    resultados.forEach(resultado => {
        let li = document.createElement('li');
        li.textContent = resultado;
        resultadoLista.appendChild(li);
    });
}
