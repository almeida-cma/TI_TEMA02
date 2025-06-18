document.addEventListener('DOMContentLoaded', () => {
    const inputASelect = document.getElementById('inputA');
    const inputBSelect = document.getElementById('inputB');
    const operationSelect = document.getElementById('operation');
    const resultSpan = document.getElementById('result');
    const inputBContainer = document.getElementById('input-b-container'); // Seleciona pelo ID
    const inputAContainer = document.getElementById('input-a-container'); // Seleciona pelo ID

    function updateResult() {
        const valueA = inputASelect.value === 'true';
        const valueB = inputBSelect.value === 'true';
        const operation = operationSelect.value;
        let result;

        // Reset da visibilidade das entradas
        inputAContainer.style.display = 'flex';
        inputBContainer.style.display = 'flex';

        switch (operation) {
            case 'AND':
                result = valueA && valueB;
                break;
            case 'OR':
                result = valueA || valueB;
                break;
            case 'NOT_A':
                result = !valueA;
                inputBContainer.style.display = 'none'; // Esconde Input B para NOT A
                break;
            case 'NOT_B':
                result = !valueB;
                inputAContainer.style.display = 'none'; // Esconde Input A para NOT B
                break;
            case 'XOR':
                result = valueA ^ valueB;
                break;
            case 'NAND':
                result = !(valueA && valueB);
                break;
            case 'NOR':
                result = !(valueA || valueB);
                break;
            default:
                result = '';
        }

        resultSpan.textContent = result ? 'Verdadeiro (1)' : 'Falso (0)';
    }

    inputASelect.addEventListener('change', updateResult);
    inputBSelect.addEventListener('change', updateResult);
    operationSelect.addEventListener('change', updateResult);

    updateResult(); // Inicializa o resultado
});