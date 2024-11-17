const numtxt1 = document.getElementById("num1")
const optxt = document.getElementById("signo")
const numtxt2 = document.getElementById("num2")
const button = document.getElementById("button")
const ptxt = document.getElementById("p")

button.addEventListener('click', calcular)

function calcular() {
    const operador = optxt.value
    const num1 = parseFloat(numtxt1.value)
    const num2 = parseFloat(numtxt2.value)
    if (operador == "+" || operador == "-" || operador == "/" || operador == "*" || !NaN(num1) && !NaN(num2)) {
        let resultado;
        switch (operador) {
            case "+":
                resultado = num1 + num2
                break
            case "-":
                resultado = num1 - num2
                break
            case "/":
                resultado = num1 / num2
                break
            case "*":
                resultado = num1*num2
                break
        }
        ptxt.innerText = "= " + resultado
    }else{
        ptxt.innerText = "operacion invalida"
    }
}
