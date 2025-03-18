//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosRestantes = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); 

    if (!nomeAmigo) {
        alert("Digite um nome");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já existe!");
        return;
    }

    amigos.push(nomeAmigo);
    amigosRestantes.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Você precisa adicionar pelo menos um amigo!");
        return;
    }

    if (amigosRestantes.length === 0) {
        alert("Todos os amigos já foram sorteados! Reiniciando...");
        amigosRestantes = [...amigos]; 
    }

    let indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
    let sorteado = amigosRestantes.splice(indiceSorteado, 1)[0];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;
}