document.getElementById('tipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        document.getElementById('result').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('result').textContent = `Gorjeta: R$ ${tipAmount.toFixed(2)} | Total: R$ ${totalAmount.toFixed(2)}`;
});