let totalEleitores = 0;
let votos = { 1: 0, 2: 0, 3: 0 };
let eleitoresVotaram = 0;

function iniciarVotacao() {
    totalEleitores = Number(document.getElementById('totalEleitores').value);
    
    if (totalEleitores <= 0 || isNaN(totalEleitores)) {
        alert("Por favor, insira um número válido de eleitores.");
        return;
    }

    document.getElementById('votacao').style.display = "block";
    document.getElementById('resultado').innerHTML = "";
    eleitoresVotaram = 0;
    votos = { 1: 0, 2: 0, 3: 0 };
    document.getElementById('statusVotacao').textContent = `Eleitor 1 de ${totalEleitores}, vote agora!`;
}

function registrarVoto() {
    const voto = Number(document.getElementById('votoInput').value);

    if (![1, 2, 3].includes(voto)) {
        alert("Voto inválido! Escolha entre 1, 2 ou 3.");
        return;
    }

    votos[voto]++;
    eleitoresVotaram++;

    if (eleitoresVotaram < totalEleitores) {
        document.getElementById('statusVotacao').textContent = `Eleitor ${eleitoresVotaram + 1} de ${totalEleitores}, vote agora!`;
    } else {
        mostrarResultado();
    }

    document.getElementById('votoInput').value = "";
}

function mostrarResultado() {
    document.getElementById('votacao').style.display = "none";
    
    let vencedor = Object.keys(votos).reduce((a, b) => votos[a] > votos[b] ? a : b);
    let empate = Object.values(votos).filter(v => v === votos[winner]).length > 1;

    let resultadoTexto = ` Resultado da Eleição:\n`;
    resultadoTexto += ` Candidato 1: ${votos[1]} votos\n`;
    resultadoTexto += ` Candidato 2: ${votos[2]} votos\n`;
    resultadoTexto += ` Candidato 3: ${votos[3]} votos\n`;

    if (empate) {
        resultadoTexto += ` A eleição terminou em empate!`;
    } else {
        resultadoTexto += ` Vencedor: Candidato ${vencedor}!`;
    }

    document.getElementById('resultado').innerHTML = resultadoTexto;
}
