function calculadora(){
    var calculo = document.getElementById('calculo').value;
    var p1 = parseInt(document.getElementById('p1').value);
    var p2 = parseInt(document.getElementById('p2').value);
    var resposta = 0;

    switch (calculo){
        case 'soma':
            resposta = p1 - p2;
            break;

        case 'subtração':
            resposta = p1 * 2 + p2 * 3;
            break;

        case 'multiplicação':
            resposta = p1 * p2;
            break;

        case 'divisão':
            if (p1 > p2){
                alert("O numero 1 é o mario")  
            }else{
                alert("O numero 2 é o maior")   
            }
            break;
    }
    
    alert("O resultado é: " + resposta)
}

function ativ2() {
    let salario = parseInt(document.getElementById("salario-bruto").value);
    let porcentagem = 0.000;
    let valorInss = 0.00;

    if (salario <= 1000) {
        porcentagem = 0.08;
    } else if (salario <= 1500) {
        porcentagem = 0.085;
    } else {
        porcentagem = 0.09;
    }

    valorInss = salario * porcentagem;

    document.getElementById("valor-inss").textContent = valorInss;
    document.getElementById("salario-liquido").textContent = salario - valorInss;

}
