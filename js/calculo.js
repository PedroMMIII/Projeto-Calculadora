document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelectorAll('button');
    const mostrar = document.querySelector('.res');
    let entradaAtual = '';
    let operador = '';
    let primeiroOperador = null;

    button.forEach(button => 
    {
        button.addEventListener('click', () => 
        {
            const valor = button.textContent;

            if(valor == 'AC') 
            {
                entradaAtual = '';
                operador = '';
                primeiroOperador = null;
                mostrar.textContent = 0;
            }
            else if(valor == '+/-')
            {
                if(entradaAtual) 
                {
                    entradaAtual = parseFloat(entradaAtual *- 1).toString();
                    mostrar.textContent = entradaAtual;
                }
            }
            else if(valor == "=") 
            {
                if(primeiroOperador != null && entradaAtual && operador) 
                {
                    entradaAtual = avaliar(primeiroOperador, parseFloat(entradaAtual), operador);
                    mostrar.textContent = entradaAtual;
                    primeiroOperador = null;
                    operador = '';
                }
            }
            else if(['+', '-', '*', '/'].includes(valor)) 
            {
                if(entradaAtual) 
                {
                    if(primeiroOperador == null) 
                    {
                        primeiroOperador = parseFloat(entradaAtual);
                    }
                    else if(operador) 
                    {
                        primeiroOperador = avaliar(primeiroOperador, parseFloat(entradaAtual), operador);
                    }
                    operador = valor
                    entradaAtual = ''
                }
            }
            else 
            {
                entradaAtual += valor
                mostrar.textContent = entradaAtual
            }
        })
    });
});

function avaliar(primeiroOperador, segundoOperador, operador) 
{
    switch (operador) 
    {
        case '+':
            return primeiroOperador + segundoOperador;
        case '-':
            return primeiroOperador - segundoOperador;
        case '*':
            return primeiroOperador * segundoOperador;
        case '/':
            return primeiroOperador / segundoOperador;
    }
};