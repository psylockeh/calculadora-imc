document.getElementById('calcular').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura > 0 && peso > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);

        let mensagem = '';
        let classe = '';

        if (imc < 18.5) {
            mensagem = `${nome}, seu IMC é ${imc} (Abaixo do peso)`;
            classe = 'abaixo';
        } else if (imc >= 18.5 && imc < 24.9) {
            mensagem = `${nome}, seu IMC é ${imc} (Peso ideal)`;
            classe = 'ideal';
        } else if (imc >= 25 && imc < 29.9) {
            mensagem = `${nome}, seu IMC é ${imc} (Sobrepeso)`;
            classe = 'sobrepeso';
        } else {
            mensagem = `${nome}, seu IMC é ${imc} (Obesidade)`;
            classe = 'obesidade';
        }

     
        resultado.className = 'result';
    
        resultado.classList.add(classe);
        resultado.textContent = mensagem;
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente!';
        resultado.className = 'result';
    }
});
