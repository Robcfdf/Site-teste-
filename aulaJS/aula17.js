function verificaAprovacao() {
    // Pegando as 4 notas
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);

    let resultado = document.getElementById("resultado");

    // Verifica se todas são números válidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        resultado.innerHTML = "<span style='color:black;'>Por favor, digite todas as notas corretamente.</span>";
        return;
    }

    // Calcula a média
    let media = (n1 + n2 + n3 + n4) / 4;

    // Regras de aprovação
    if (media >= 7) {
        resultado.innerHTML = `<span style='color:green;'>Média: ${media.toFixed(2)} → Aluno aprovado ✅</span>`;
    } else if (media >= 5) {
        resultado.innerHTML = `<span style='color:orange;'>Média: ${media.toFixed(2)} → Aluno em recuperação ⚠️</span>`;
    } else {
        resultado.innerHTML = `<span style='color:red;'>Média: ${media.toFixed(2)} → Aluno reprovado ❌</span>`;
    }
}
