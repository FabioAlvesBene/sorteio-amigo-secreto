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
    let tentativas = 0;
    let maxTentativas = 1000; // Evita loops infinitos
    
    while (tentativas < maxTentativas) {
        let sorteioValido = true;
        let tempResultado = {};
        let tempSorteio = [...sorteio];
        
        for (let amigo of amigos) {
            let amigoDisponivel = tempSorteio.filter(nome => nome !== amigo);
            
            if (amigoDisponivel.length === 0) {
                sorteioValido = false;
                break;
            }
            
            let sorteado = amigoDisponivel[Math.floor(Math.random() * amigoDisponivel.length)];
            tempResultado[amigo] = sorteado;
            tempSorteio.splice(tempSorteio.indexOf(sorteado), 1);
        }
        
        if (sorteioValido) {
            resultado = tempResultado;
            exibirResultado(resultado);
            return;
        }
        
        tentativas++;
    }
    
    alert("Não foi possível realizar um sorteio válido. Tente novamente.");
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
