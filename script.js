function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const escalaEntrada = document.getElementById('escalaEntrada').value;
    const escalaSaida = document.getElementById('escalaSaida').value;

    let resultado;

    switch (escalaEntrada) {
        case 'celsius':
            if (escalaSaida === 'fahrenheit') {
                resultado = valor * 9/5 + 32;
            } else if (escalaSaida === 'kelvin') {
                resultado = valor + 273.15;
            } else {
                resultado = valor;
            }
            break;
        case 'fahrenheit':
            if (escalaSaida === 'celsius') {
                resultado = (valor - 32) * 5/9;
            } else if (escalaSaida === 'kelvin') {
                resultado = (valor - 32) * 5/9 + 273.15;
            } else {
                resultado = valor;
            }
            break;
        case 'kelvin':
            if (escalaSaida === 'celsius') {
                resultado = valor - 273.15;
            } else if (escalaSaida === 'fahrenheit') {
                resultado = (valor - 273.15) * 9/5 + 32;
            } else {
                resultado = valor;
            }
            break;
    }

    document.getElementById('resultadoValor').textContent = resultado.toFixed(2);
}
