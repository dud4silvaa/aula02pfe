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
        mensagem.style.color = "black";
        mensagem.textContent = "1 não é um número primo.";
        return;
    }

    let primo = true;
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    
    if (divisores.length > 2) {
        primo = false;
    }

    if (primo) {
        mensagem.style.color = "pink";
        mensagem.textContent = `O número ${numero} é primo!`;
    } else {
        mensagem.style.color = "pink";
        mensagem.innerHTML = `O número ${numero} não é primo. <br> Divisores: ${divisores.join(", ")}`;
    }
}
