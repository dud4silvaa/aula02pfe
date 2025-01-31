function validarNumero() {
    const input = document.getElementById('numeroInput');
    const mensagem = document.getElementById('mensagem');
    const numero = Number(input.value);

    if (isNaN(numero)) {
        mensagem.style.color = "black";
        mensagem.textContent = "Por favor, digite um número válido!";
    } else if (numero < 0 || numero > 1000) {
        mensagem.style.color = "gray";
        mensagem.textContent = "O número deve estar entre 0 e 1000!";
    } else {
        mensagem.style.color = "pink";
        mensagem.textContent = `Número válido: ${numero}`;
    }
}
