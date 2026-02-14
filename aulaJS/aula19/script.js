let expressao = "";

function adicionarNumero(num) {
    expressao += num;
    document.getElementById("display").value = expressao;
}

function adicionarOperador(op) {
    expressao += " " + op + " ";
    document.getElementById("display").value = expressao;
}

function calcular() {
    let resultado = eval(expressao);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function limpar() {
    expressao = "";
    document.getElementById("display").value = "";
    document.getElementById("resultado").innerHTML = "";
}
