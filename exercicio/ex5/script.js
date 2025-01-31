function calcularMedia() {
    const input = document.getElementById('notasInput');
    const resultado = document.getElementById('resultado');
    
    let notas = input.value.split(',').map(nota => Number(nota.trim()));

  
    if (notas.some(isNaN) || notas.length === 0) {
        resultado.style.color = "black";
        resultado.textContent = "Por favor, insira notas válidas separadas por vírgula.";
        return;
    }

 
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;

    resultado.style.color = "pink";
    resultado.innerHTML = `Média Aritmética: <strong>${media.toFixed(2)}</strong> <br> 🔢 Notas fornecidas: ${notas.join(", ")}`;
}
