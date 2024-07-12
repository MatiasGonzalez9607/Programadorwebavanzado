function calculate(operator) {
    var numeroa = parseFloat(document.getElementById('numeroa').value);
    var numerob = parseFloat(document.getElementById('numerob').value);
    var result;

    if (isNaN(numeroa) || isNaN(numerob)) {
        result = 'Por favor, ingrese números válidos';
    } else {
        switch(operator) {
            case '+':
                result = numeroa + numerob ;
                break;
            case '-':
                result = numeroa - numerob;
                break;
            case '*':
                result = numeroa * numerob;
                break;
            case '/':
                if (numerob === 0) {
                    result = 'Error: división por cero';
                } else {
                    result = numeroa / numerob;
                }
                break;
            default:
                result = 'Numero no válido';
        }
    }

    document.getElementById('result').value = result;
}