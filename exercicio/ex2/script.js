function verificarPrimo() {
    const input = document.getElementById('numeroInput');
    const mensagem = document.getElementById('mensagem');
    const numero = Number(input.value);

    if (!Number.isInteger(numero) || numero < 1) {
        mensagem.style.color = "black";
        mensagem.textContent = "Por favor, digite um número inteiro positivo!";
        return;
    }

    if (numero === 1) {
        mensagem.style.color = "gray";
        mensagem.textContent = "1 não é um número primo.";
        return;
    }

    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        mensagem.style.color = "pink";
        mensagem.textContent = `O número ${numero} é primo!`;
    } else {
        mensagem.style.color = "gray";
        mensagem.textContent = `O número ${numero} não é primo.`;
    }
}
