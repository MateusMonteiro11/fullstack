function media(){
    let num1 = parseInt(document.getElementById("nota1").value)
    let num2 = parseInt(document.getElementById("nota2").value)
    let num3 = parseInt(document.getElementById("nota3").value)

    let invalido = "Invalido"
    const divisao = 10
    const soma = (num1 * 2 + num2 * 3 + num3 * 5) / (divisao)

    document.getElementById("paragrafo").innerHTML = soma
    if (soma >= 8 & soma <=10){
        document.getElementById("Conceito").innerHTML = "Recebe Conceito A"
    }
    if (soma >= 7 & soma <= 8){
        document.getElementById("Conceito").innerHTML = "Recebe Conceito B"
    }
    if (soma >= 6 & soma <= 7){
        document.getElementById("Conceito").innerHTML = "Recebe Conceito C"
    }
    if (soma >= 5 & soma <= 6){
        document.getElementById("Conceito").innerHTML = "Recebe Conceito D"
    }
    if (soma >= 0 & soma <= 5){
        document.getElementById("Conceito").innerHTML = "Recebe Conceito E"
    }
    if (soma > 10){
        alert("Valores invalidos")
        document.getElementById("Conceito").innerHTML = "CONCEITO INVALIDO"
        document.getElementById("paragrafo").innerHTML = invalido
    }
}
