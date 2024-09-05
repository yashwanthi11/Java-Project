/**
 * 
 */
function calculateProfit() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);

    if (isNaN(income) || isNaN(expenses)) {
        alert('Please enter valid numbers for income and expenses.');
    } else {
        const profit = income - expenses;
        document.getElementById('profit-value').textContent = '$' + profit.toFixed(2);
    }
}
