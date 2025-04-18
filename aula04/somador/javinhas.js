function somador(){
    let num1 = parseInt(document.getElementById("Numero1").value)
    let num2 = parseInt(document.getElementById("Numero2").value)

    let resultado_soma = num1 + num2

    document.getElementById("paragrafo").innerHTML = resultado_soma
}