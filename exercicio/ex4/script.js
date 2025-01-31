function mostrarPrimos() {
    const input = document.getElementById('numeroInput');
    const mensagem = document.getElementById('mensagem');
    const n = Number(input.value);

    if (!Number.isInteger(n) || n < 1) {
        mensagem.style.color = "black";
        mensagem.textContent = "Por favor, digite um número inteiro positivo!";
        return;
    }

    let primos = [];
    let totalDivisoes = 0;

    for (let num = 2; num <= n; num++) {
        let primo = true;
        let divisoes = 0;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            divisoes++;
            totalDivisoes++;
            if (num % i === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            primos.push(num);
        }
    }

    mensagem.style.color = "pink";
    mensagem.innerHTML = ` Números primos até ${n}: ${primos.join(", ")} <br> || Total de divisões realizadas: ${totalDivisoes}`;
}
