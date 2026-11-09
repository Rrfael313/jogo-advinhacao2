
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativasMaximas = 10;
let tentativasRestantes = tentativasMaximas;

function chutar() {

    let campoPalpite = document.getElementById("palpite");

    let palpite = Number(campoPalpite.value);

    let mensagem = document.getElementById("mensagem");
    let tentativas = document.getElementById("tentativas");

    // Validação do palpite
    if (
        campoPalpite.value.trim() === "" ||
        !Number.isInteger(palpite) ||
        palpite < 1 ||
        palpite > 100
    ) {
        mensagem.innerText = "Digite um número inteiro entre 1 e 100!";
        campoPalpite.focus();
        return;
    }

    // Diminui uma tentativa
    tentativasRestantes--;

    // Verifica se acertou
    if (palpite === numeroSecreto) {

        mensagem.innerText = "Parabéns! Você acertou!";
        finalizarJogo();

    } else if (tentativasRestantes === 0) {

        mensagem.innerText =
            "Você perdeu! O número secreto era " + numeroSecreto;

        finalizarJogo();

    } else if (palpite < numeroSecreto) {

        mensagem.innerText = "O número secreto é maior!";

    } else {

        mensagem.innerText = "O número secreto é menor!";

    }

    // Atualiza as tentativas
    tentativas.innerText =
        "Tentativas restantes: " + tentativasRestantes;

    // Limpa o campo e devolve o foco
    campoPalpite.value = "";

    if (tentativasRestantes > 0 && palpite !== numeroSecreto) {
        campoPalpite.focus();
    }
}

function finalizarJogo() {

    document.getElementById("botaoChutar").disabled = true;
    document.getElementById("palpite").disabled = true;

}

function reiniciar() {

    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    tentativasRestantes = tentativasMaximas;

    document.getElementById("mensagem").innerText = "Boa sorte!";

    document.getElementById("tentativas").innerText =
        "Tentativas restantes: " + tentativasMaximas;

    document.getElementById("palpite").value = "";

    document.getElementById("palpite").disabled = false;

    document.getElementById("botaoChutar").disabled = false;

    document.getElementById("palpite").focus();

}
