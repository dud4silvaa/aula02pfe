function calcularClassificacao() {
    const input = document.getElementById('idadesInput');
    const resultado = document.getElementById('resultado');
    
    let idades = input.value.split(',').map(idade => Number(idade.trim()));

        if (idades.some(isNaN) || idades.length === 0 || idades.some(idade => idade <= 0)) {
        resultado.style.color = "black";
        resultado.textContent = "Por favor, insira idades válidas separadas por vírgula.";
        return;
    }

    let soma = idades.reduce((acc, idade) => acc + idade, 0);
    let media = soma / idades.length;

   
    let classificacao = "";
    if (media <= 25) {
        classificacao = "Turma Jovem ";
    } else if (media <= 60) {
        classificacao = "Turma Adulta ";
    } else {
        classificacao = "Turma Idosa";
    }

  
    resultado.style.color = "pink";
    resultado.innerHTML = ` Média de Idade: <strong>${media.toFixed(2)}</strong> anos <br>  Classificação: <strong>${classificacao}</strong>`;
}
