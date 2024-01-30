const calcular = document.getElementById('calcular');
function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura'). value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'se cuidando? levemente acima do peso';
        }else if (valorIMC < 35){
            classificacao = 'tentando se cuidar?! obesidade grau I';
        }else if (valorIMC < 40){
            classificacao = 'acima do peso! obesidade grauII';
        }else{
            classificacao = 'muito acima do peso! obesidade do grau III';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e, você eetá ${classificacao}`;
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }


}

calcular.addEventListener('click', imc);
