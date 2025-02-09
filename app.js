//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = {};
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoDisponivel = sorteio.filter(nome => nome !== amigos[i]);
        
        if (amigoDisponivel.length === 0) {
            return sortearAmigo(); // Se não houver combinação válida, refaz o sorteio
        }
        
        let sorteado = amigoDisponivel[Math.floor(Math.random() * amigoDisponivel.length)];
        resultado[amigos[i]] = sorteado;
        
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    let amigoSorteado = prompt("Digite seu nome para ver quem você tirou:");
    if (resultado[amigoSorteado]) {
        alert(`Você tirou: ${resultado[amigoSorteado]}`);
    } else {
        alert("Nome não encontrado na lista.");
    }
}
